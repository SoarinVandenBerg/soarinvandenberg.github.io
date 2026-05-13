const canvas = document.getElementById("life");
const ctx = canvas.getContext("2d");
const cols = 30;
const rows = 20;
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;
function drawGrid() {
    ctx.strokeStyle = "#444"

    for (let x = 0; x <= cols; x = x + 1) {
        ctx.beginPath();
        ctx.moveTo(x * cellWidth, 0);
        ctx.lineTo(x * cellWidth, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y <= rows; y = y + 1) {
        ctx.beginPath();
        ctx.moveTo(0, y * cellHeight);
        ctx.lineTo(canvas.width, y * cellHeight);
        ctx.stroke();
    }
}
let board;
function initBoard() {
    board = [];
    for (let y = 0; y < rows; y = y + 1) {
        board [y] = [];
        for (let x = 0; x < cols; x = x + 1) {
            board[y][x] = 0;
        }
    }
}
function drawCells() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < rows; y = y + 1) {
        for (let x = 0; x < cols; x = x + 1) {

        }
    }
}
initBoard();
drawGrid();
drawCells();
console.log("JS loaded");
