import React from 'react'
import { Container, DivImagemUsuario, DivNomeUsuario, ImagemUsuario, Texto } from './style'
import imagemTeste from "../../assets/avatarUsuario.jpeg"
export default function CardUsuario({usuario}) {
  return (
    <Container>
        {/* <DivImagemUsuario>
        <ImagemUsuario src={imagemTeste}/>
        </DivImagemUsuario> */}
        <DivNomeUsuario>
            <Texto>{usuario.nome}</Texto>
        </DivNomeUsuario>
    </Container>
  )
}
