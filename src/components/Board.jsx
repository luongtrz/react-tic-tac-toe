import React from 'react';
import Square from './Square.jsx';
import { calculateWinner } from '../utils/gameLogic';

// Board component manages the 3x3 grid of squares
function Board({ xIsNext, squares, onPlay, winningSquares }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares, i);
    }

    const winner = calculateWinner(squares);
    const isTie = !winner && squares.every(square => square !== null);

    let status;
    if (winner) {
        status = <span className="text-green-600 font-bold">Winner: {winner}</span>;
    } else if (isTie) {
        status = <span className="text-yellow-500 font-bold">Result: Draw</span>;
    } else {
        status = <span className="text-gray-600">Next player: {xIsNext ? 'X' : 'O'}</span>;
    }

    // Rewrite Board to use two loops instead of hardcoding squares
    const renderSquare = (i) => {
        return (
            <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
                isWinner={winningSquares?.includes(i)}
            />
        );
    };

    const boardRows = [];
    for (let row = 0; row < 3; row++) {
        const squareRow = [];
        for (let col = 0; col < 3; col++) {
            const squareIndex = row * 3 + col;
            squareRow.push(renderSquare(squareIndex));
        }
        boardRows.push(
            <div key={row} className="flex">
                {squareRow}
            </div>
        );
    }

    return (
        <>
            <div className="text-2xl font-bold mb-6 min-h-[60px] flex items-center justify-center">
                {status}
            </div>
            <div className="border-4 border-gray-300 rounded-xl overflow-hidden shadow-lg">
                {boardRows}
            </div>
        </>
    );
}

export default Board;