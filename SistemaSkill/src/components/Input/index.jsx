import React, { useState } from 'react'
import { Container,DivInput,DivTeste,DivTexto,TextInput } from './style'
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function Input({texto,placeholder,type,value,onChange,textoAcessibilidade}) {
  const[visualizarSenha,setVisualizarSenha]=useState(false);
  const verSenha=()=>{
    setVisualizarSenha(!visualizarSenha)
  }

  return (
    <Container >
        <DivTexto tabIndex={0}>{texto}</DivTexto>
        {type!="password"&&(
          <DivInput tabIndex={0}>
            <TextInput placeholder={placeholder} type={type} onChange={onChange} value={value} aria-label={textoAcessibilidade}/>
          </DivInput>
        )}
        {type=="password"&&(

          <DivInput tabIndex={0}>
          <TextInput placeholder={placeholder} type={visualizarSenha==false?"password":"text"} onChange={onChange} value={value} aria-label={textoAcessibilidade}/>
          <DivTeste tabIndex={0} >
            {visualizarSenha&&(<FaEye onClick={verSenha} tabIndex={0} aria-label='Selecione para visualizar a senha'/>)}
            {!visualizarSenha&&(<FaEyeSlash onClick={verSenha} tabIndex={0} aria-label= "Selecione para ocultar a senha"/>)}
          </DivTeste>
          </DivInput>
       
        )}
    </Container>
  )
}
