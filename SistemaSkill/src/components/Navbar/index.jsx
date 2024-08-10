import React from 'react'
import { Container,DivLogout,Logo } from './style'
import logo from '../../assets/Logov3-fotor-bg-remover-20240809223911.png'
import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const logout =()=>{
    navigate("/login")
  }
  return (
    <Container>
        <Logo src={logo}/>
        <DivLogout>
        <FaSignOutAlt onClick={logout} style={{height:"2rem", width:"2rem",color:"var(--cor-cinza-v2)"}}/>
        </DivLogout>
    </Container>
  )
}
