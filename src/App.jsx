import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";
import { TURN } from "./constants";
import { checkWin, checkEndGame } from "./logic/winnerLogic";
import { Board } from "./components/Board";
import { saveStorage, cleanStorage } from "./logic/storageLogic";

function App() {
    const [board, setBoard] = useState(() => {
        const boardStorage = window.localStorage.getItem('board')
        return boardStorage
            ? JSON.parse(boardStorage)
            : Array(9).fill(null)
    });
    const [turn, setTurn] = useState(() => {
        const turnStorage = window.localStorage.getItem('turn');
        return turnStorage ?? TURN.x
    });
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        // si el square ya tiene algo, no hacer nada;
        if (board[index] || winner) return;

        // Actualiza el turno
        const newTurn = turn === TURN.x ? TURN.o : TURN.x;
        setTurn(newTurn);

        // Actualiza el tablero
        const newBoard = [...board];
        newBoard[index] = newBoard[index] ?? turn;
        setBoard(newBoard);

        saveStorage(newBoard, newTurn)

        // Verifica si hay ganador y actualiza el estado
        const isWinner = checkWin(newBoard);
        isWinner && confetti() && setWinner(isWinner);
        checkEndGame(newBoard) && setWinner(false);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(TURN.x);
        setWinner(null);

        cleanStorage()
    };

    return (
        <main className="board">
            <h1>tic-tac-toe</h1>
            <button onClick={resetGame}>Reiniciar juego</button>
            
            <Board board={board} updateBoard={updateBoard}/>
            
            <section className="turn">
                <Square isSelected={turn === TURN.x}>{TURN.x}</Square>
                <Square isSelected={turn === TURN.o}>{TURN.o}</Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    );
}

export default App;
