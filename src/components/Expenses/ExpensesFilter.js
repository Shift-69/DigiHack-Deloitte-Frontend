import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Sortează după arie</label>
          <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value='Bucuresti'>Capitala</option>
            <option value="provincie">Provincie</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
