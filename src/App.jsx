import React, { useState } from "react";
import { Board, GameControls, GameHistory } from "./components";
import { calculateWinner, getWinningSquares } from "./utils";

// Main Game component that manages state and history
export default function Game() {
    const [history, setHistory] = useState([
        {
            squares: Array(9).fill(null),
            lastMove: null,
        },
    ]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isAscending, setIsAscending] = useState(true);
    const xIsNext = currentMove % 2 === 0;
    const currentGame = history[currentMove];

    function handlePlay(nextSquares, moveIndex) {
        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            {
                squares: nextSquares, 
                lastMove: moveIndex 
            },
        ];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    function resetGame() {
        setHistory([
            {
                squares: Array(9).fill(null),
                lastMove: null,
            },
        ]);
        setCurrentMove(0);
    }

    function undoMove() {
        if (currentMove > 0) {
            setCurrentMove(currentMove - 1);
        }
    }

    function toggleSortOrder() {
        setIsAscending(!isAscending);
    }

    const winner = calculateWinner(currentGame.squares);
    const winningSquares = winner ? getWinningSquares(currentGame.squares) : null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-5">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-start bg-white rounded-2xl p-10 shadow-2xl max-w-5xl w-full">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6 drop-shadow-lg">
                        Tic Tac Toe
                    </h1>
                    <div className="mb-8">
                        <Board
                            xIsNext={xIsNext}
                            squares={currentGame.squares}
                            onPlay={handlePlay}
                            winningSquares={winningSquares}
                        />
                    </div>
                    <GameControls
                        onReset={resetGame}
                        onUndo={undoMove}
                        canUndo={currentMove > 0}
                    />
                </div>
                <GameHistory
                    history={history}
                    currentMove={currentMove}
                    isAscending={isAscending}
                    onJumpTo={jumpTo}
                    onToggleSort={toggleSortOrder}
                />
            </div>
        </div>
    );
}
