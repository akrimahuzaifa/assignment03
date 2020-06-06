import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';

function App({name, age}) {
  return  <div>
            Hello from App.js Updated: <strong>{name}</strong><br/>
            age: {age - 1}<br/>
            <Hello firstname = {name}></Hello>
          </div>
}

/*
function App({name, age}) {
  let   user = {name: "Akrima Huzaifa", age: 36}
  
  let {name, age} = user;
  let newAge = age - 11;
  //same work as above but lengthy
  let name = user.name;
  let age = user.age;
   
  return  <div>
            Hello from App.js Updated: {name}<br/>
            age: {age - 1}<br/>
           
          </div>
}
*/
/*
function App(props) {
  return  <div>
            Hello from App.js Updated: {props.name}<br/>
            age: {props.age - 10}<br/>
           
          </div>
}
*/

export default App;
