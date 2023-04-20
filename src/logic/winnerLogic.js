import { WINNER_COMBOS } from "../constants";

export function checkWin(board) {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

export function checkEndGame(newBoard) {
    return newBoard.every((square) => square !== null);
}
