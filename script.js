class TicTacToe {
    constructor() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;
        this.scores = { X: 0, O: 0 };
        
        this.initializeElements();
        this.bindEvents();
        this.updateStatus();
    }

    initializeElements() {
        this.cells = document.querySelectorAll('[data-cell]');
        this.status = document.getElementById('status');
        this.scoreX = document.getElementById('score-x');
        this.scoreO = document.getElementById('score-o');
        this.restartBtn = document.getElementById('restart-btn');
        this.resetScoreBtn = document.getElementById('reset-score-btn');
        this.winningMessage = document.getElementById('winning-message');
        this.winningText = document.getElementById('winning-text');
        this.restartBtnModal = document.getElementById('restart-btn-modal');
    }

    bindEvents() {
        this.cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e));
        });

        this.restartBtn.addEventListener('click', () => this.restartGame());
        this.resetScoreBtn.addEventListener('click', () => this.resetScore());
        this.restartBtnModal.addEventListener('click', () => this.restartGame());
    }

    handleCellClick(e) {
        const cell = e.target;
        const cellIndex = Array.from(this.cells).indexOf(cell);

        if (this.board[cellIndex] !== '' || !this.gameActive) {
            return;
        }

        this.makeMove(cellIndex);
    }

    makeMove(index) {
        this.board[index] = this.currentPlayer;
        this.cells[index].textContent = this.currentPlayer;
        this.cells[index].classList.add(this.currentPlayer.toLowerCase());

        // Add animation class
        this.cells[index].style.animation = 'pulse 0.3s ease-in-out';

        // Remove animation class after animation completes
        setTimeout(() => {
            this.cells[index].style.animation = '';
        }, 300);

        if (this.checkWin()) {
            this.endGame(false);
        } else if (this.checkDraw()) {
            this.endGame(true);
        } else {
            this.switchPlayer();
            this.updateStatus();
        }
    }

    checkWin() {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winConditions.some(condition => {
            const [a, b, c] = condition;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                // Highlight winning cells
                this.cells[a].classList.add('winning');
                this.cells[b].classList.add('winning');
                this.cells[c].classList.add('winning');
                return true;
            }
            return false;
        });
    }

    checkDraw() {
        return this.board.every(cell => cell !== '');
    }

    endGame(draw) {
        this.gameActive = false;
        
        if (draw) {
            this.winningText.textContent = "It's a draw!";
        } else {
            this.winningText.textContent = `Player ${this.currentPlayer} wins!`;
            this.scores[this.currentPlayer]++;
            this.updateScore();
        }

        setTimeout(() => {
            this.winningMessage.classList.add('show');
        }, 500);
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    updateStatus() {
        this.status.textContent = `Player ${this.currentPlayer}'s turn`;
    }

    updateScore() {
        this.scoreX.textContent = this.scores.X;
        this.scoreO.textContent = this.scores.O;
    }

    restartGame() {
        this.board = Array(9).fill('');
        this.currentPlayer = 'X';
        this.gameActive = true;

        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o', 'winning');
        });

        this.winningMessage.classList.remove('show');
        this.updateStatus();
    }

    resetScore() {
        this.scores = { X: 0, O: 0 };
        this.updateScore();
        this.restartGame();
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
}); 

// Home page logic
window.addEventListener('DOMContentLoaded', function() {
  const homePage = document.getElementById('home-page');
  const startBtn = document.getElementById('start-game-btn');
  if (startBtn && homePage) {
    startBtn.addEventListener('click', function() {
      homePage.style.display = 'none';
    });
  }
}); 