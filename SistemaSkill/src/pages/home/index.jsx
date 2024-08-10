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
      <div style={{width:"100vw",height:"10vh"}} tabIndex={0}>
        <Navbar/>
      </div>
     
        <ContainerBot>
            <ContainerUsuario tabIndex={0}>
            <CardUsuario usuario={usuario}/>
            </ContainerUsuario>
            <ContainerSkills tabIndex={0}>
              <DivSubtitulo tabIndex={0}>
                <p style={{fontSize:"var(--fontsize-subtitulo)"}} tabIndex={0}>Skills</p>
                    <FaPlusCircle onClick={abrirModal} tabIndex={0} aria-label='Clique para adicionar novas skills a lista'/>             
              </DivSubtitulo>
              {!modal&&(
              <DivSkills tabIndex={0}>
                {skillsUsuario.map((skill)=>(
                  <CardSkill key={skill.id} skill={skill} page={"Home"}/>
                ))}
              </DivSkills>
              )}
            </ContainerSkills>
        </ContainerBot>
     
        {modal &&(
        <ModalSkill onClick={fecharModal} />
      )}
       <ToastContainer />
    </Container>
  )
}
