import React, { useContext } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/cadastro';
import Home from '../pages/home';
import Teste from '../pages/testeModal';
import { SistemaContext } from '../contexts/SistemaSkill/sistemaSkill';

const PrivateRoutes = () => {
  const { autenticated } = useContext(SistemaContext);
  if(!autenticated) return <Navigate to="/" replace />;
  return <Outlet />;
};
function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />}/>
      <Route path="/teste" element={<Teste/>}/>
      <Route element={<PrivateRoutes/>}>
      <Route path="/home" element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default AppRoutes;