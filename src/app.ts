// TYPES 

type Player = "X" | "O";
type Winner = Player | "Draw" | null;

// DOM ELEMENTS

const boxes = document.querySelectorAll<HTMLButtonElement>(".box");
const resetBtn = document.querySelector<HTMLButtonElement>("#reset-btn");
const newGameBtn = document.querySelector<HTMLButtonElement>("#new-btn");
const msgContainer = document.querySelector<HTMLElement>(".msg-container");
const msg = document.querySelector<HTMLElement>("#msg");

if (!resetBtn || !newGameBtn || !msgContainer || !msg) {
  throw new Error("Required DOM elements not found");
}

// STATE

let turnO: boolean = true; // true => O, false => X
let count: number = 0;

// CONSTANTS

const winPatterns: number[][] = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// FUNCTIONS

// Reset Game
const resetGame = (): void => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// Draw Game
const gameDraw = (): void => {
  msg.innerText = "Game was a Draw.";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Disable all boxes
const disableBoxes = (): void => {
  boxes.forEach((box) => (box.disabled = true));
};

// Enable all boxes
const enableBoxes = (): void => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// Show Winner
const showWinner = (winner: Player): void => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Check Winner
const checkWinner = (): boolean => {
  for (let pattern of winPatterns) {
    const pos1Val = boxes[pattern[0]].innerText;
    const pos2Val = boxes[pattern[1]].innerText;
    const pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val && pos2Val && pos3Val) {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val as Player);
        return true;
      }
    }
  }
  return false;
};

// EVENT LISTENERS 

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const currentPlayer: Player = turnO ? "O" : "X";

    box.innerText = currentPlayer;
    box.disabled = true;

    turnO = !turnO;
    count++;

    const isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);