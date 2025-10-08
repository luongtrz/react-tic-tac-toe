import React from 'react';

// GameHistory component for displaying move history
function GameHistory({ history, currentMove, isAscending, onJumpTo, onToggleSort }) {
    const moves = history.map((step, move) => {
        let description;
        if (move > 0) {
            const row = Math.floor(step.lastMove / 3) + 1;
            const col = (step.lastMove % 3) + 1;
            const player = move % 2 === 1 ? 'X' : 'O';
            description = `Move ${move}: ${player} at (${row}, ${col})`;
        } else {
            description = 'Start game';
        }

        // For the current move, show "You are at move #..." instead of a button
        if (move === currentMove) {
            return (
                <div
                    key={move}
                    className="p-3 rounded-lg mb-2 bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold text-center shadow-md"
                >
                    You are at move #{move}
                </div>
            );
        }

        return (
            <div
                key={move}
                className="p-3 rounded-lg mb-2 bg-gray-100 hover:bg-gray-200 hover:border-blue-500 hover:translate-x-2 border-2 border-transparent transition-all duration-200 cursor-pointer font-medium"
                onClick={() => onJumpTo(move)}
            >
                {description}
            </div>
        );
    });

    // Sort moves based on toggle
    const sortedMoves = isAscending ? moves : moves.slice().reverse();

    if (history.length <= 1) {
        return null;
    }

    return (
        <div className="w-full lg:w-80 bg-gray-50 rounded-xl p-5 border-2 border-gray-200 shadow-lg">
            <div className="flex justify-between items-center mb-4 pb-3 border-b-2 border-gray-300">
                <h2 className="text-xl font-bold text-gray-800">
                    Game History
                </h2>
                <button
                    className="px-3 py-2 bg-cyan-500 text-white text-xs font-bold rounded-lg shadow hover:bg-cyan-600 hover:-translate-y-0.5 transition-all duration-200"
                    onClick={onToggleSort}
                >
                    Sort: {isAscending ? 'Ascending' : 'Descending'}
                </button>
            </div>
            <div className="max-h-80 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white shadow-inner custom-scrollbar">
                {sortedMoves}
            </div>
        </div>
    );
}

export default GameHistory;