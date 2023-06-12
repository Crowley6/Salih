import './App.css';
import React, { useState } from 'react';
import Main from './Main/Main';

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="AppBody">
        <header>
          <ul>
            <li><a href='/'>Диваны</a></li>
            <li><a href='/'>Доставка</a></li>
            <li><a href='/'>Условия</a></li>
            <li><a href='/'>О нас</a></li>
          </ul>
          <h1>Salih</h1>
        </header>
        <main>
          <div className='MainHeader'>
            <h1>Сортировка</h1>

            <div>
              <input type='text' placeholder='По названию' />
              <input type='text' placeholder='По цене' />
              <button>Найти</button>
            </div>
          </div>

          <Main state={props.state} />
        </main>

        <footer>Техническая информация:</footer>
      </div>
    </div>
  );
}

export default App;