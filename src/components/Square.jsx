import React from 'react';

// Square component represents each cell in the tic-tac-toe board
function Square({ value, onSquareClick, isWinner }) {
    return (
        <button className={`
                w-20 h-20 text-4xl font-bold border-2 border-gray-300 
                bg-white hover:bg-blue-50 hover:border-blue-500 hover:scale-105 
                active:scale-95 transition-all duration-200 focus:outline-none
                ${isWinner ? 'bg-green-200 border-green-500 animate-pulse-winner' : ''}
                ${value === 'X' ? 'text-blue-600' : 'text-red-600'}
            `}
                    onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

export default Square;