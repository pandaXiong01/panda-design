import React from 'react';
import Button from './components/Button'
import './styles/index.scss'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="button" size='sm' btnType='danger'>按钮</Button>
      </header>
    </div>
  );
}

export default App;
