import React from 'react';

export default function SudokuGrid() {
    
    return (
        <div>
            <div className = "sudokuBoard">
                {[...Array(81)].map((x, i) =><input type='number' min='1' max='9' key={i}></input>)}
            </div>
            <button>Solve</button>
        </div>
    );
}