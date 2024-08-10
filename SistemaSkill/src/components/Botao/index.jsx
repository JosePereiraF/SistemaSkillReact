import React from 'react'
import { BotaoC, Texto } from './style'

export default function Botao({onClick,texto,textoAcessibilidade}) {

  return (
        <BotaoC title='Logar' onClick={onClick} aria-label={textoAcessibilidade} tabIndex={0}><Texto>{texto}</Texto></BotaoC>
  )
}
