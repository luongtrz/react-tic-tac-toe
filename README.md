# React Tic Tac Toe

A complete Tic Tac Toe game built with React, featuring interactive gameplay, game history, and modern UI.

## Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to play.

## Project Structure

```
src/
├── App.js              # Main game component with state management
├── index.js            # React app entry point
├── index.css           # All styling for the game
├── components/         # React components
│   ├── Square.js       # Individual square component
│   ├── Board.js        # Game board with 3x3 grid
│   ├── GameControls.js # New Game and Undo buttons
│   └── GameHistory.js  # Move history and sorting
└── utils/
    └── gameLogic.js    # Helper functions for winner calculation
public/
├── index.html          # HTML template
package.json            # Dependencies and scripts
```

## Game Components

- **Game** (App.js): Main component that manages state and history
- **Board**: Manages the 3x3 grid and game status  
- **Square**: Individual clickable squares
- **GameControls**: New Game and Undo Move buttons
- **GameHistory**: Move history display with sorting functionality
- **gameLogic**: Utility functions for winner calculation and game logic

## Technologies Used

- React 18
- Tailwind CSS
- Create React App

## Scripts

- `npm start` - Development server
- `npm run build` - Production build
- `npm run deploy` - Deploy to GitHub Pages

## Game Rules

1. Players alternate turns (X first, then O)
2. Click empty squares to make moves
3. Get 3 in a row to win
4. Use history to review or jump to previous moves
