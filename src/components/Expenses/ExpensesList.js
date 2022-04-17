import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Gol</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.tip}
          amount={expense.recompensa}
          date={expense.date}
          specie={expense.specie}
          nume={expense.nume}
          adresa={expense.adresa}
          culoare={expense.adresa}
          marime={expense.marime}
          rasa={expense.rasa}
          tip={expense.tip}
          tel={expense.tel}
          email={expense.email}
          photo={expense.photo}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
