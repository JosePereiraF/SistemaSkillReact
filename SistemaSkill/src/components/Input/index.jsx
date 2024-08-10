import React, { useState } from 'react'
import { Container,DivInput,DivTeste,DivTexto,TextInput } from './style'
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export default function Input({texto,placeholder,type,value,onChange}) {
  const[visualizarSenha,setVisualizarSenha]=useState(false);
  const verSenha=()=>{
    setVisualizarSenha(!visualizarSenha)
  }

  return (
    <Container>
        <DivTexto >{texto}</DivTexto>
        {type!="password"&&(
          <DivInput>
            <TextInput placeholder={placeholder} type={type} onChange={onChange} value={value}/>
          </DivInput>
        )}
        {type=="password"&&(

          <DivInput>
          <TextInput placeholder={placeholder} type={visualizarSenha==false?"password":"text"} onChange={onChange} value={value} />
          <DivTeste>
            {visualizarSenha&&(<FaEye onClick={verSenha}/>)}
            {!visualizarSenha&&(<FaEyeSlash onClick={verSenha}/>)}
          </DivTeste>
          </DivInput>
       
        )}
    </Container>
  )
}
