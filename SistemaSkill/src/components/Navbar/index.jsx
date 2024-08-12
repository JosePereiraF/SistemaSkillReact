import React from 'react'
import { Container,DivLogout,Logo } from './style'
import logo from '../../assets/Logov3-fotor-bg-remover-20240809223911.png'
import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.setItem('autenticado',false);
    navigate("/login");
  }
  return (
    <Container tabIndex={0}>
        <Logo src={logo} tabIndex={0} aria-label='Logotipo escrita skill badge'/>
        <DivLogout tabIndex={0} >
        <FaSignOutAlt onClick={logout} style={{height:"2rem", width:"2rem",color:"var(--cor-cinza-v2)"}} tabIndex={0} aria-label='Selecione para deslogar.'/>
        </DivLogout>
    </Container>
  )
}
