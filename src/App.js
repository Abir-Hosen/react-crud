import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import Nav from './component/nav';
import Body from './component/body';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
