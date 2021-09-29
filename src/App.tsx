import React from 'react';
import Button from './components/Button'
import Form from './components/Form/Form'

import './styles/index.scss'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
        <Button type="button" size='sm' btnType='danger'>按钮</Button>
        <Button type="button" size='lg' btnType='danger' style={{marginTop:'10px'}}>按钮</Button>
      </header>
    </div>
  );
}

export default App;
