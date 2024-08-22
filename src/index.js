import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>Bharani Shopping</h1>
      <Cart />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));