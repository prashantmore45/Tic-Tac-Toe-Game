"use strict";
// TYPES 
// DOM ELEMENTS
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
if (!resetBtn || !newGameBtn || !msgContainer || !msg) {
    throw new Error("Required DOM elements not found");
}
// STATE
let turnO = true; // true => O, false => X
let count = 0;
// CONSTANTS
const winPatterns = [
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
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
// Draw Game
const gameDraw = () => {
    msg.innerText = "Game was a Draw.";
    msgContainer.classList.remove("hide");
    disableBoxes();
};
// Disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};
// Enable all boxes
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};
// Show Winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
// Check Winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        const pos1Val = boxes[pattern[0]].innerText;
        const pos2Val = boxes[pattern[1]].innerText;
        const pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val && pos2Val && pos3Val) {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;
};
// EVENT LISTENERS 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const currentPlayer = turnO ? "O" : "X";
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
