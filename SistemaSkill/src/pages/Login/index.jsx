import React, { useContext, useEffect, useState } from 'react'
import { Cadastro, CheckBox, Container, ContainerBot, ContainerLeft, ContainerLeftBot, ContainerLeftTop, DivCadastro, DivSalvarCredecial, TextoErro } from './style'
import Input from '../../components/Input'
import Botao from '../../components/Botao'
import { LoginUsuario } from '../../service/Usuario/usuario'
import ContainerImagem from '../../components/ContainerImagem'
import { useNavigate } from 'react-router-dom'
import { SistemaContext } from '../../contexts/SistemaSkill/sistemaSkill'
export default function Login() {
  const navigate = useNavigate();
  const [login,setLogin] = useState('');
  const [senha,setSenha] = useState("");
  const [erroMensagem,setErroMensagem] = useState("");
  const [saveCredencial,setSaveCredencial]=useState(false);
  const {setUsuario,setAutenticated,autheticated}=useContext(SistemaContext);
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
                <ContainerLeftTop tabIndex={0}>
                <p style={{fontSize:"var(--fontsize-titulo)"}} tabIndex={0} >Conheça nossa plataforma</p>
                </ContainerLeftTop>
                <ContainerLeftBot tabIndex={0}>
                <Input texto={"Login"} placeholder={"Digite seu login"} type={"text"} value={login} onChange={handleLogin} textoAcessibilidade={"Campo para adicionar o login"}/>
                <Input texto={"Senha"} placeholder={"Digite sua senha"} type={"password"} value={senha} onChange={handleSenha} textoAcessibilidade={"Campo para adicionar a senha"}/>
                <DivSalvarCredecial tabIndex={0}>
                  <p>Salvar credenciais </p>
               <CheckBox type='checkbox' onClick={salvaCredencial} checked={saveCredencial} aria-label='Selecione para salvar o login e a senha no proximo acesso' tabIndex={0}/>
                </DivSalvarCredecial>
                <DivCadastro tabIndex={0}>
                <Cadastro href='/cadastro' aria-label='Selecione para se cadastrar' tabIndex={0}>Cadastre-se já.</Cadastro>
                </DivCadastro>
                <Botao onClick={logar} texto={"logar"} textoAcessibilidade={"Botao para fazer login"} />
                <TextoErro tabIndex={0}>{erroMensagem}</TextoErro>
                </ContainerLeftBot>
              
            </ContainerLeft>
         <ContainerImagem/>
        </ContainerBot>
    </Container>
  )
}
