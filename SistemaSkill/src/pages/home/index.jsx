import React, { useContext, useEffect, useState } from 'react'
import { Container, ContainerBot, ContainerSkills, ContainerUsuario, DivSkills, DivSubtitulo } from './style'
import Navbar from '../../components/Navbar'
import CardUsuario from '../../components/CardUsuario'
import CardSkill from '../../components/CardSkill'
import { SistemaContext } from '../../contexts/SistemaSkill/sistemaSkill'
import { FaPlusCircle } from 'react-icons/fa'
import ModalSkill from '../../components/ModalSkills'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const {skillsUsuario,setSkillUsuario,usuario,skillsAdicionar,setSkillsAdicionar} =useContext(SistemaContext);
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
