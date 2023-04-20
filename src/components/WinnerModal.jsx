import { Square } from "./Square";

export function WinnerModal({winner, resetGame}) {
    if (winner === null) return null;

    const winnerText = winner === false ? 'Empate' : 'Ganó:'
    return (
        <section className="winner">
            <div className="text">
                <h1>{winnerText}</h1>

                <header className="win">
                    {winner ? <Square>{winner}</Square>: <Square>🫤</Square>}
                </header>

                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}