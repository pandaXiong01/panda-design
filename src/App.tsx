import React, { useState } from 'react';
import Button from './components/Button'

import './styles/index.scss'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>panda-design</h1>
      <div>
        <p>{count}</p>
        <Button 
          type="button" 
          size='sm' 
          btnType='danger'
          onClick={()=>setCount(c=>c+1)}
          >Add</Button>
      </div>

    </div>
  );
}

export default App;
