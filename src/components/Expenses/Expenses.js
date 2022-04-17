import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredAdresa, setFilteredAdresa] = useState('Bucuresti');

  const filterChangeHandler = (selectedAdresa) => {
    setFilteredAdresa(selectedAdresa);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // console.log(expense);
    // const wordArray = expense.adresa.split(" ");
    // console.log(wordArray[0]);
    if(filteredAdresa==="Bucuresti"){
      return expense.adresa.split(" ")[0].toLowerCase() === filteredAdresa.toLowerCase();
  }else{
    return expense.adresa.split(" ")[0].toLowerCase() !== "Bucuresti".toLowerCase();
  }}
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredAdresa}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
