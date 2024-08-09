import React from 'react'
import { Container,Logo } from './style'
import logo from '../../assets/logoPokestore.png'

export default function Navbar() {
  return (
    <Container>
        <Logo src={logo}/>
    </Container>
  )
}
