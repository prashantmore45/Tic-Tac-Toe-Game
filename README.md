# Tic Tac Toe Game

A classic **Tic Tac Toe** game where two players take turns marking spaces in a 3×3 grid. The first player to get three in a row horizontally, vertically, or diagonally wins.

The project has been migrated to **TypeScript**. The source lives in `src/app.ts` and the browser loads the compiled output from `dist/app.js`.

## How It Works
- The game is played on a 3×3 board.
- Player 1 uses **X** and Player 2 uses **O**.
- Players take turns choosing an empty square.
- The first player to align three symbols (row, column, or diagonal) wins.
- If all squares are filled without a winner, the game ends in a draw.

## Setup
1. Install dependencies:

	```bash
	npm install
	```

2. Compile the TypeScript source:

	```bash
	npx tsc
	```

3. Open `index.html` in a browser. It loads the compiled game from `dist/app.js`.

## Features
- Two-player local gameplay
- Simple and intuitive interface
- Displays winner or draw at the end
- Option to restart the game

## Project Structure
- `index.html` - App shell and game board markup
- `style.css` - Game styling
- `src/app.ts` - TypeScript game logic
- `dist/app.js` - Compiled browser script

## Notes
- Run `npx tsc --watch` while developing if you want automatic rebuilds.
- The game is designed for two players on the same device.