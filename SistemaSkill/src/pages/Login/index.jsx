import React, { useContext, useEffect, useState } from 'react'
import { Cadastro, CheckBox, Container, ContainerBot, ContainerLeft, ContainerLeftBot, ContainerLeftTop, DivCadastro, DivSalvarCredecial, TextoErro } from './style'
import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import Botao from '../../components/Botao'
import { LoginUsuario } from '../../service/Usuario/usuario'
import ContainerImagem from '../../components/ContainerImagem'
import { useNavigate } from 'react-router-dom'
import { SistemaContext } from '../../contexts/SistemaSkill/sistemaSkill'
import { FaCheckSquare, FaSquare } from 'react-icons/fa'
export default function Login() {
  const navigate = useNavigate();
  const [login,setLogin] = useState('');
  const [senha,setSenha] = useState("");
  const [erroMensagem,setErroMensagem] = useState("");
  const [saveCredencial,setSaveCredencial]=useState(false);
  const {usuario,setUsuario,setAutenticated,autheticated}=useContext(SistemaContext);
  const handleLogin =(event)=>{
    setLogin(event.target.value)
  };
  const handleSenha =(event)=>{
    setSenha(event.target.value)
  };
  const logar = async(event)=>{

    if(login.length === 0 || senha.length === 0){
        setErroMensagem("Preencha todos os campos")
        return;
        }
    const loginDTO={
      login: login,
	    senha:senha
    }
    try {
      const resposta = await LoginUsuario(loginDTO);
      const usuarioSave = resposta.data.usuario
      localStorage.setItem('token',JSON.stringify(resposta.data.token));
      if(saveCredencial){
        const credencial ={
          login:login,
          senha:senha
        }
        localStorage.setItem('credencial',JSON.stringify(credencial));
      }else{
        localStorage.setItem('credencial',JSON.stringify(""));
      }
      setUsuario(usuarioSave);
      setAutenticated(!autheticated);
      navigate("/home");
    } catch (error) {
      setErroMensagem(error.response.data.titulo);
    }
  }
  const salvaCredencial =()=>{
    setSaveCredencial(!saveCredencial);
  }
  useEffect(()=>{
    const credencial = JSON.parse(localStorage.getItem("credencial"));
    if(credencial ||credencial!=""){
      setLogin(credencial.login);
      setSenha(credencial.senha);
      setSaveCredencial(true);
      }
    
  },[])

  return (
    <Container>
        
        <ContainerBot>
            <ContainerLeft>
                <ContainerLeftTop>
                <p style={{fontSize:"var(--fontsize-titulo)"}}>Conheça nossa plataforma</p>
                </ContainerLeftTop>
                <ContainerLeftBot>
                <Input texto={"Login"} placeholder={"Digite seu login"} type={"text"} value={login} onChange={handleLogin}/>
                <Input texto={"Senha"} placeholder={"Digite sua senha"} type={"password"} value={senha} onChange={handleSenha}/>
                <DivSalvarCredecial>
                  <p>Salvar credenciais </p>
               <CheckBox type='checkbox' onClick={salvaCredencial} checked={saveCredencial}/>
                </DivSalvarCredecial>
                <DivCadastro>
                <Cadastro href='/cadastro'>Cadastre-se já.</Cadastro>
                </DivCadastro>
                <Botao onClick={logar} texto={"logar"}/>
                <TextoErro>{erroMensagem}</TextoErro>
                </ContainerLeftBot>
              
            </ContainerLeft>
         <ContainerImagem/>
        </ContainerBot>
    </Container>
  )
}
