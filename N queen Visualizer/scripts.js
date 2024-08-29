document.addEventListener('DOMContentLoaded', () => {
    const boardContainer = document.getElementById('board-container');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const resumeBtn = document.getElementById('resume-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const boardSizeInput = document.getElementById('board-size');
    let n = 8;
    let board = [];
    let isPaused = false;
    let intervalId;

    function createBoard() {
        boardContainer.innerHTML = '';
        boardContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
        boardContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;
        board = Array.from({ length: n }, () => Array(n).fill(0));
        for (let i = 0; i < n * n; i++) {
            const cell = document.createElement('div');
            cell.classList.add('board-cell');
            if ((Math.floor(i / n) + i % n) % 2 !== 0) {
                cell.classList.add('dark');
            }
            boardContainer.appendChild(cell);
        }
    }

    function toggleQueen(row, col, place = true) {
        const index = row * n + col;
        const cell = boardContainer.children[index];
        if (place) {
            const queen = document.createElement('div');
            queen.classList.add('queen', 'active');
            queen.innerHTML = '&#9819;';
            cell.appendChild(queen);
        } else {
            cell.innerHTML = '';
        }
    }

    async function solveNQueens(row = 0) {
        if (isPaused) return;
        if (row === n) return true;

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 1;
                toggleQueen(row, col);
                await sleep(500);
                if (await solveNQueens(row + 1)) return true;
                board[row][col] = 0;
                toggleQueen(row, col, false);
                await sleep(500);
            }
        }
        return false;
    }

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) if (board[i][col] === 1) return false;
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) if (board[i][j] === 1) return false;
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) if (board[i][j] === 1) return false;
        return true;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function startVisualization() {
        isPaused = false;
        solveNQueens();
    }

    function resetBoard() {
        isPaused = true;
        clearInterval(intervalId);
        createBoard();
    }

    startBtn.addEventListener('click', () => {
        n = parseInt(boardSizeInput.value, 10);
        resetBoard();
        startVisualization();
    });

    resetBtn.addEventListener('click', resetBoard);

    pauseBtn.addEventListener('click', () => {
        isPaused = true;
    });

    resumeBtn.addEventListener('click', () => {
        isPaused = false;
        solveNQueens();
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    createBoard();
});
