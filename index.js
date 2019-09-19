import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => (
  <div>
    <h1>Hello World!</h1>
  </div>
);

const rootEl = document.getElementById('root');
ReactDOM.render(<Index />, rootEl);
