import React from 'react';
import SudokuCell from './SudokuCell';

export default function SudokuGrid() {
    const [sudokuNumbers, setSudokuNumbers] = React.useState(new Array(81).fill(''));
    function getInputs(e) {
        e.preventDefault();
        let solveString = ''
        for(let i = 0; i < sudokuNumbers.length; i++) {
            if(sudokuNumbers[i]) {
                solveString = solveString.concat(sudokuNumbers[i])
            }else {
                solveString = solveString.concat('.');
            }
        }
        // console.log(solveString);
        // TODO: Sudoku api call goes here to check if it's solvable and then loop over solved string creating a solved array to be put onto the input values
        
    }

    return (
        <div>
            <div className = "sudokuBoard">
                {[...Array(81)].map((x, i) => <SudokuCell key = {i} setSudokuNumbers={setSudokuNumbers} index={i} sudokuNumbers={sudokuNumbers}/>)}
            </div>
            <button onClick={getInputs}>Solve</button>
        </div>
    );
}