import React from 'react';

// GameControls component for reset and undo buttons
function GameControls({ onReset, onUndo, canUndo }) {
  return (
    <div className="flex gap-5 flex-wrap justify-center mt-6">
      <button
        className="px-6 py-3 bg-blue-600 text-white font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
        onClick={onReset}
      >
        New Game
      </button>
      <button
        className="px-6 py-3 bg-gray-600 text-white font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        onClick={onUndo}
        disabled={!canUndo}
      >
        Undo Move
      </button>
    </div>
  );
}

export default GameControls;