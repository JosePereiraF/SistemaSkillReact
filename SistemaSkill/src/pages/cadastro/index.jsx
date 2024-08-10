import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import ContainerImagem from '../../components/ContainerImagem';

import Input from '../../components/Input';
import { Container, ContainerLeft , ContainerBot, TextoErro, DivVoltar } from './style';
import Botao from '../../components/Botao';
import { CadastroUsuario } from '../../service/Usuario/usuario';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Cadastro() {
  const navigate = useNavigate();
  const[nomeUsuario,setNomeUsuario]= useState("");
  const [login,setLogin] = useState('');
  const [senha,setSenha] = useState("");
  const [confirmarSenha,setConfirmarSenha]=useState("");
  const [erroMensagem, setErroMensagem]= useState("");
  const handleNomeUsuario =(event)=>{
    setNomeUsuario(event.target.value)
  };
  const handleLogin =(event)=>{
    setLogin(event.target.value)
  };
  const handleSenha =(event)=>{
    setSenha(event.target.value)
  };
  const handleConfirmarSenha =(event)=>{
    setConfirmarSenha(event.target.value)
  };
  const cadastrar = async(event)=>{
    event.preventDefault();
    if(login.length === 0 || senha.length === 0 || confirmarSenha.length ===0){
        setErroMensagem("Preencha todos os campos")
        return;
        }
        if(senha !== confirmarSenha){
          setErroMensagem("Senhas não conferem")
          return;
          }
          const usuarioDTO={
            nome:nomeUsuario,
            login:login,
            senha:senha
          }

          try{
            const resposta = await CadastroUsuario(usuarioDTO);
            navigate("/login");
          }
          catch (error){
            setErroMensagem(error.response.data.titulo);
            console.log(error.response.data.titulo);
            
          }
  }
  const voltar=()=>{
    navigate("/login")
  }
  return (
    <Container>
      <ContainerBot>
        <DivVoltar tabIndex={0}>
        <FaArrowLeft onClick={voltar} style={{height:"30px",width:"30px"}} aria-label='Selecione para voltar para o login' tabIndex={0}/>
        </DivVoltar>
      <ContainerLeft tabIndex={0}>
      <Input texto={"Nome de usuario"} placeholder={"Digite seu nome de usuario"} type={"text"} value={nomeUsuario} onChange={handleNomeUsuario} textoAcessibilidade={"Campo para adicionar o seu nome de usuario"}/>
      <Input texto={"Login"} placeholder={"Digite seu login"} type={"text"} value={login} onChange={handleLogin} textoAcessibilidade={"Campo para adicionar o login"}/>
      <Input texto={"Senha"} placeholder={"Digite sua senha"} type={"password"} value={senha} onChange={handleSenha} textoAcessibilidade={"Campo para adicionar a senha"}/>
      <Input texto={"Confirmar senha"} placeholder={"Digite sua senha novamente"} type={"password"} value={confirmarSenha} onChange={handleConfirmarSenha} textoAcessibilidade={"Campo para confirmar a senha"}/>
      <Botao texto={"cadastrar"} onClick={cadastrar} textoAcessibilidade={"Selecione para cadastrar-se."} />
      <TextoErro tabIndex={0}>{erroMensagem}</TextoErro>
      </ContainerLeft>
      <ContainerImagem />
      </ContainerBot>
    </Container>
  )
}
export default Cadastro;