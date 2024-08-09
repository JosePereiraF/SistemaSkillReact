import React from 'react'
import { BotaoC, Texto } from './style'

export default function Botao({onClick,texto}) {

  return (
        <BotaoC title='Logar' onClick={onClick}><Texto>{texto}</Texto></BotaoC>
  )
}
