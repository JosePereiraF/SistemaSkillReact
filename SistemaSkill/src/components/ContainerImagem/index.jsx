import React from 'react'
import { Container,ImagemLogin } from './style'
import imagem from '../../assets/Login.png'

export default function ContainerImagem() {
  return (
    <Container tabIndex={0}>
    <ImagemLogin src={imagem} tabIndex={0} aria-label='Imagem cartonizada de um cara sentado mexendo em um notebook'/> 
 </Container>
  )
}
