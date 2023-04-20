export function saveStorage(board, turn) {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export function cleanStorage() {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}