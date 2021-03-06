import React from 'react';

import logo from './logo.svg';
import './App.css';

import rootReducer from "./Reducers";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import UselessButton from './Components/uselessBtn.js';
import ItemList from './Components/ItemList.js'

let initState = {todos: [
  {id:1, text:"Hey"},
  {id:2, text:"dude"}
]};

const store = createStore(rootReducer, initState);

function App() {
  return (
    <Provider store={store}>
      <ItemList/>
    </Provider>
  );
}

export default App;
