import React from 'react';
import { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [chosenDate, setChosenDate] = useState("");

  const dateChangeHandler = (e) => {
    const selectedData = {
      date: e.target.value
    };
    setChosenDate(e.target.value);

    props.onChangeFilter(e.target.value);

    console.log(selectedData);
  }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dateChangeHandler} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;