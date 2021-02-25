import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const men = [{name: "muhit", age:24},{name: "jahir", age:18},{name: "kawser", age:23},{name: "jubu", age:22}];

  return (
    <div className="App">
      <Counter></Counter>
      <header className="App-header">
      {
        men.map(man => <Person name={man}></Person>)
      }
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <h3>Count : {count}</h3>
      <MouseClicked mouse={count}></MouseClicked>
      <MouseClicked mouse={count+5}></MouseClicked>
      <MouseClicked mouse={count+10}></MouseClicked>
    </div>
  )
}

function MouseClicked(props) {
  const values = props;
  return (
    <div>
      <h4>MovieList : {values.mouse}</h4>
    </div>
  )
}

function Person(props) {
  const styleDiv = {
    border: '3px solid white',
    borderRadius: '10px',
    margin: '10px',
    padding: '20px'

  }

  const value = Object.values(props);
  console.log(value);
  return (
    <div style={styleDiv}>
      <h2>Name : {value[0].name}</h2>
      <h2>Age : {value[0].age}</h2>
    </div>
  )
}
export default App;
