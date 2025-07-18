# Tic Tac Toe Game

A beautiful, modern Tic Tac Toe game built with HTML, CSS, and JavaScript featuring smooth animations, responsive design, and score tracking.

## Features

- 🎮 **Classic Gameplay**: Traditional 3x3 Tic Tac Toe with X and O players
- 🎨 **Modern UI**: Beautiful gradient design with glassmorphism effects
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🏆 **Score Tracking**: Keeps track of wins for both players
- ✨ **Smooth Animations**: Hover effects, winning cell highlights, and modal transitions
- 🔄 **Game Controls**: Restart game and reset score functionality
- 🎯 **Win Detection**: Automatic detection of wins and draws with visual feedback

## How to Play

1. **Start the Game**: Open `index.html` in your web browser
2. **Take Turns**: Players X and O take turns clicking on empty cells
3. **Win Condition**: Get three of your symbols in a row (horizontally, vertically, or diagonally)
4. **Game Over**: When someone wins or it's a draw, a modal will appear
5. **Continue Playing**: Click "Play Again" to start a new game

## Game Controls

- **Restart Game**: Clears the current board and starts a new game
- **Reset Score**: Resets both players' scores to 0 and starts a new game

## Technical Details

### Files Structure

```text
tic-tac-toe/
├── index.html      # Main HTML structure
├── styles.css      # Modern CSS styling with animations
├── script.js       # Game logic and interactions
└── README.md       # This file
```

### Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Object-oriented game logic
- **Google Fonts**: Poppins font family for modern typography

### Key Features Implementation

#### Game Logic

- Object-oriented design with a `TicTacToe` class
- Array-based board representation
- Win condition checking for all possible combinations
- Draw detection when board is full

#### UI/UX Features

- Glassmorphism design with backdrop blur effects
- Smooth hover animations and transitions
- Winning cell highlighting with pulse animation
- Modal overlay for game end states
- Responsive design that adapts to different screen sizes

#### Score System

- Persistent score tracking across games
- Visual score display with styled counters
- Reset functionality to start fresh

## Browser Compatibility

This game works on all modern browsers that support:

- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- ES6+ JavaScript features
- Backdrop filter (with graceful fallback)

## Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start playing immediately!

No build process or dependencies required - it's ready to play right away!

## Customization

You can easily customize the game by modifying:

- Colors in `styles.css` (look for the gradient values)
- Font sizes and spacing
- Animation durations and effects
- Game board size (requires both CSS and JS changes)

## License

This project is open source and available under the MIT License.
 
 
