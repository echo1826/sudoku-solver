import React from 'react';
import SudokuCell from './SudokuCell';
import axios from 'axios';

export default function SudokuGrid() {
    const [sudokuNumbers, setSudokuNumbers] = React.useState(new Array(81).fill(''));
    const [unsolved, setUnsolved] = React.useState(false);
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
        var options = {
            method: 'POST',
            url: 'https://solve-sudoku.p.rapidapi.com/',
            headers: {
              'content-type': 'application/json',
              'x-rapidapi-host': 'solve-sudoku.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_API_KEY
            },
            data: {
              puzzle: solveString
            }
          };
          
          axios.request(options).then(function (response) {
            // console.log(response.data.solution);
            if(response.data.solution) {
                const solvedArray = response.data.solution.split('');
                // console.log(solvedArray);
                setSudokuNumbers(solvedArray);
                setUnsolved(false);
            }else {
                console.log('unsolved fired');
                setUnsolved(true);
            }
          }).catch(function (error) {
              console.error(error);
          });
    }

    function clearBoard(e) {
        e.preventDefault();
        setSudokuNumbers(new Array(81).fill(''));
    }

    return (
        <div>
            <div className = "sudokuBoard">
                {[...Array(81)].map((x, i) => <SudokuCell key = {i} setSudokuNumbers={setSudokuNumbers} index={i} sudokuNumbers={sudokuNumbers}/>)}
            </div>
            <button onClick={getInputs}>Solve</button>
            <button onClick={clearBoard}>Clear Board</button>
            {unsolved ? <div>Unsolvable</div> : <React.Fragment></React.Fragment>}
        </div>
    );
}