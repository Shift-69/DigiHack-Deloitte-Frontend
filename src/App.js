import React, { useEffect, useState } from 'react';
// import classes from './../src/components/map/harta.module.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import Harta from './components/map/harta';
import { Wrapper } from '@googlemaps/react-wrapper';


const DUMMY_ANIMALS = [
  {
    id: 'e1',
    tip: "Pierdut",
    specie: "câine",
    nume: "Maya",
    culoare: "alb",
    rasa: "labrador",
    marime: "mare",
    // adresa:
    email: "defaultEmail@gmail.com",
    tel: "0712 341 234",
    recompensa: 500,
    date: new Date(2022, 7, 14),
    adresa: "Unirii",
    photo: "dog.jpg"
  },
];

const App = () => {
  // const mark = [{lat:45, lng:27}, {lat:40, lng:26}];
  const [expenses, setExpenses] = useState([]);
  const [mark, setMark] = useState([{ lat: 44.432810, lng: 26.070170 },
  {lat:44.415380,lng:26.143610},{lat:44.562191,lng:27.359840},
  {lat:45.173674,lng:28.796427}
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  useEffect(() => {
    function fetchPetsHandler() {
      fetch("http://localhost:5001/api/posts").then(response => {
        return response.json();
      }).then(data => {
        setExpenses(data.map(data => { return { ...data, date: new Date(data.date) }; }));
      });
    };

    fetchPetsHandler();
  }, [])

  async function addPostHandler(post){
    const response = await fetch("http://localhost:5001/api/posts",{
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const primit = await response.json();
    console.log(primit);
  }


  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addPostHandler} setMark={setMark} />
      <Expenses items={expenses} />
      <Wrapper apiKey="AIzaSyACWSoOTQIUtgqwpas9vEUKWN0Jg_sQ2E0">
        <Harta markere={mark}></Harta>
      </Wrapper>
    </div>

  );
};

export default App;
