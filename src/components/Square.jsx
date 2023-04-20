export function Square({ children, index, isSelected, updateBoard }) {
    const claseName = `square ${isSelected ? "is-selected" : ""}`;

    const handleClick = () => {
        updateBoard(index)
    }

    return <div className={claseName} onClick={handleClick}>{children}</div>;
}
