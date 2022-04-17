import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <p>{props.tip} {props.specie} {props.rasa} cu numele {props.nume} zona {props.adresa}.</p>
          <p>Contact: {props.tel}, {props.email}</p>
          <img src={props.photo}></img>
          {props.tip.toLowerCase()==="pierdut" && <div className='expense-item__price'>RON{props.amount}</div>}
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
