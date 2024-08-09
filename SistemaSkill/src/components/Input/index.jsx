import React from 'react'
import { Container,DivTexto,TextInput } from './style'

export default function Input({texto,placeholder,type,value,onChange}) {
  return (
    <Container>
        <DivTexto >{texto}</DivTexto>
        <TextInput placeholder={placeholder} type={type} onChange={onChange} value={value}/>
    </Container>
  )
}
