import React from 'react';

export default function SudokuCell(props) {
    function changeInput(e) {
        e.preventDefault();
        let cloneSudokuNumbers = [...props.sudokuNumbers];
        cloneSudokuNumbers.splice(props.index, 1, e.target.value);
        props.setSudokuNumbers(cloneSudokuNumbers);
    }

    return (
        <input type='number' min='1' max='9' className='cell' value={props.sudokuNumbers[props.index]} onChange={changeInput}></input>
    )
}