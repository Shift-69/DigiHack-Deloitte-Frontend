import React, { useState } from 'react';

import './ExpenseForm.css';
import Geocode from "react-geocode";
import ErrorModal from '../UI/ErrorModal';

const ExpenseForm = (props) => {
  const [error, setError] = useState();
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');

  const [enteredTip, setEnteredTip] = useState('');
  const [enteredSpecie, setEnteredSpecie] = useState('');
  const [enteredNume, setEnteredNume] = useState('');
  const [enteredCuloare, setEnteredCuloare] = useState('');
  const [enteredRasa, setEnteredRasa] = useState('');
  const [enteredMarime, setEnteredMarime] = useState('');
  const [enteredMail, setEnteredMail] = useState('');
  const [enteredTel, setEnteredTel] = useState('');
  const [enteredRecompensa, setEnteredRecompensa] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAdresa, setEnteredAdresa] = useState('');
  const [enteredPhoto, setEnteredPhoto] = useState('');

  

  let expenseData;
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });



  const adresaHandler = (event) => {
    setEnteredAdresa(event.target.value);
  }
  const tipAnuntHandler = (event) => {
    setEnteredTip(event.target.value);
  }
  const specieHandler = (event) => {
    setEnteredSpecie(event.target.value);
  }
  const numeHandler = (event) => {
    setEnteredNume(event.target.value);
  }
  const culoareHandler = (event) => {
    setEnteredCuloare(event.target.value);
  }
  const rasaHandler = (event) => {
    setEnteredRasa(event.target.value);
  }
  const marimeHandler = (event) => {
    setEnteredMarime(event.target.value);
  }
  const mailHandler = (event) => {
    setEnteredMail(event.target.value);
  }
  const telHandler = (event) => {
    setEnteredTel(event.target.value);
  }
  const recompensaHandler = (event) => {
    setEnteredRecompensa(event.target.value);
  }

  const photoHandler = (event) => {
    setEnteredPhoto(event.target.value);
  }


  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

  };


  // console.log(props.marks);

  // const buc = {lat: 44.4234633061, lng: 26.1013029281};
  // const getDistance = (buc) =>{
  //     const offset = (5*360)/40075;

  // };


  const submitHandler = (event) => {
    Geocode.setApiKey("AIzaSyACWSoOTQIUtgqwpas9vEUKWN0Jg_sQ2E0");

    Geocode.setLanguage("en");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();

    const noulMarker =  Geocode.fromAddress(`${enteredAdresa}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        props.setMark(prevMark => {
          return [...prevMark, {lat, lng}]
        });
        });


    expenseData = {
      // title: enteredTitle,
      // amount: enteredAmount,
      tip: enteredTip,
      specie: enteredSpecie,
      nume: enteredNume,
      culoare: enteredCuloare,
      rasa: enteredRasa,
      marime: enteredMarime,
      email: enteredMail,
      tel: enteredTel,
      recompensa: enteredRecompensa,
      date: new Date(enteredDate),
      adresa: enteredAdresa
    };

    event.preventDefault();


    if (enteredTip.toLowerCase() !== "pierdut" &&
      enteredTip.toLowerCase() !== "gasit") {
      setError({
        title: "Input invalid!",
        message: "Adaugati un tip valid de mesaj!"
      });
      return;
    }

    if (enteredSpecie.trim().length === 0) {
      setError({
        title: "Input invalid!",
        message: "Adaugati specia animalului!"
      });
      return;
    }

    if (enteredMail.trim().length === 0) {
      setError({
        title: "Input invalid!",
        message: "Adaugati emailul!"
      });
      return;
    }

    if (enteredTel.trim().length === 0) {
      setError({
        title: "Input invalid!",
        message: "Adaugati numarul de telefon!"
      });
      return;
    }

    if (enteredCuloare.trim().length === 0) {
      setError({
        title: "Input invalid!",
        message: "Adaugati culoarea!"
      });
      return;
    }




    setEnteredTip('');
    setEnteredSpecie('');
    setEnteredNume('');
    setEnteredCuloare('');
    setEnteredRasa('');
    setEnteredMarime('');
    setEnteredMail('');
    setEnteredTel('');
    setEnteredRecompensa('');
    setEnteredDate('');
    setEnteredAdresa('');
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title}
        message={error.message}
        onConfirm={errorHandler} />}
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Tip anunt (pierdut/găsit)* </label>
            <input
              type='text'
              value={enteredTip}
              onChange={tipAnuntHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Specie*</label>
            <input
              type='text'
              value={enteredSpecie}
              onChange={specieHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Nume animal</label>
            <input
              type='text'
              value={enteredNume}
              onChange={numeHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Culoare*</label>
            <input
              type='text'
              value={enteredCuloare}
              onChange={culoareHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Rasa</label>
            <input
              type='text'
              value={enteredRasa}
              onChange={rasaHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Mărime</label>
            <input
              type='text'
              value={enteredMarime}
              onChange={marimeHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Adresa*</label>
            <input
              type='text'
              value={enteredAdresa}
              onChange={adresaHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>E-mail*</label>
            <input
              type='text'
              value={enteredMail}
              onChange={mailHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Număr de telefon*</label>
            <input
              type='text'
              value={enteredTel}
              onChange={telHandler}
            />
          </div>



          <div className='new-expense__control'>
            <label>Recompensa (RON)</label>
            <input
              type='number'
              min='0.00'
              step='10'
              value={enteredRecompensa}
              onChange={recompensaHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Link poză</label>
            <input
              type='text'
              value={enteredPhoto}
              onChange={photoHandler}
            />
          </div>

          <div className='new-expense__control'>
            <label>Date*</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>


        </div>
        <div className='new-expense__actions'>
          <button type="button" onClick={props.onCancel}>Anulează</button>
          <button type='submit' onClick={() => {
            props.onSaveExpenseData({
              // title: enteredTitle,
              // amount: enteredAmount,
              tip: enteredTip,
              specie: enteredSpecie,
              nume: enteredNume,
              culoare: enteredCuloare,
              rasa: enteredRasa,
              marime: enteredMarime,
              email: enteredMail,
              tel: enteredTel,
              recompensa: enteredRecompensa,
              date: new Date(enteredDate),
              adresa: enteredAdresa
            });
          }}>Adaugă</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
