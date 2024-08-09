import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/cadastro';
import Home from '../pages/home';
import Teste from '../pages/testeModal';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/teste" element={<Teste />}/>
    </Routes>
  );
}

export default AppRoutes;