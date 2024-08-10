import React, { useContext, useEffect, useState } from 'react'
import { Container, ContainerBot, ContainerSkills, ContainerUsuario, DivSkills, DivSubtitulo } from './style'
import Navbar from '../../components/Navbar'
import CardUsuario from '../../components/CardUsuario'
import CardSkill from '../../components/CardSkill'
import { SistemaContext } from '../../contexts/SistemaSkill/sistemaSkill'
import { ListarSkillUsuario } from '../../service/Usuario/usuario'
import { FaPlusCircle } from 'react-icons/fa'
import ModalSkill from '../../components/ModalSkills'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const {skillsUsuario,setSkillUsuario,usuario,skillsAdicionar,setSkillsAdicionar,mensagem,ativarMensagem,setAtivarMensagem} =useContext(SistemaContext);
  const [modal,setModal]= useState(false);
  
  useEffect(()=>{
      setSkillUsuario(usuario. skills);
      console.log(skillsUsuario);
  },[])
  const abrirModal=()=>{
    setModal(!modal);
    setSkillsAdicionar(skillsUsuario);
  }
  const fecharModal=()=>{
    setModal(!modal);
    setSkillUsuario(skillsAdicionar);
  }
  const funcao =()=>{
    
    console.log(ativarMensagem);
  }
  const testando=JSON.parse(localStorage.getItem("modal"));

  if(testando=="false"){
    const texto = mensagem;
    const valor = false;
    setAtivarMensagem(valor);
    console.log(valor)
    console.log(mensagem);
    toast.success("Skill Atualizada com sucesso!",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    localStorage.setItem("modal",JSON.stringify("true"));
  }

  
  return (
    <Container>
      <div style={{width:"100vw",height:"10vh"}}>
        <Navbar/>
      </div>
     
        <ContainerBot>
            <ContainerUsuario>
            <CardUsuario usuario={usuario}/>
            </ContainerUsuario>
            <ContainerSkills>
              <DivSubtitulo>
                <p style={{fontSize:"var(--fontsize-subtitulo)"}}>Skills</p>
                    <FaPlusCircle onClick={abrirModal}/>             
              </DivSubtitulo>
              {!modal&&(
              <DivSkills>
                {skillsUsuario.map((skill)=>(
                  <CardSkill key={skill.id} skill={skill} page={"Home"}/>
                ))}
              </DivSkills>
              )}
            </ContainerSkills>
        </ContainerBot>
     
        {modal &&(
        <ModalSkill onClick={fecharModal}/>
      )}
       <ToastContainer />
    </Container>
  )
}
