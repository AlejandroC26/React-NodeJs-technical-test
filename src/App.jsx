import './App.css';

import React from 'react'
import Header from './components/Header';
import FormGrid from './components/Grid/Grid';

function App() {
  return (<>
    <Header/>
    <div className="App">
      <FormGrid title={'User country'} />
    </div>
  </>);
}

export default App;
