import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reduxstate from './Reducers/reduxstate';

const root = ReactDOM.createRoot(document.getElementById('root'));
const RerenderReact = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  )
}
debugger

RerenderReact(reduxstate.getState());
reduxstate.subscribe(() => { RerenderReact(reduxstate.getState()) });