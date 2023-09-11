import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import {Login} from './login';
import {Register} from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
//this displays the login form when loading the page for the first time
  const toggleForm = (formName) => {
      setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Nav></Nav>
      {           //this checks if the condition is true
        currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
