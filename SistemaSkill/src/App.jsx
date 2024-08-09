import { useState } from 'react'
import './App.css'
import Routes from './routes/Routes'
import { BrowserRouter as Router} from 'react-router-dom';
import SistemaProvider from './contexts/SistemaSkill/sistemaSkill';

function App() {

  return (
    <SistemaProvider>
      <Router>
      <Routes/>
      </Router> 
    </SistemaProvider>
  )
}

export default App;
