import React, { useContext, useEffect, useState } from 'react'
import { Container, DivSkills, DivTitulo, Titulo } from './style'
import CardSkill from '../CardSkill'
import { ListarSkills } from '../../service/Usuario/usuario'
import { SistemaContext } from '../../contexts/SistemaSkill/sistemaSkill';
import { FaTimes } from 'react-icons/fa';


export default function ModalSkill({onClick}) {
  const {skillsUsuario,setSkillUsuario} =useContext(SistemaContext);
  useEffect(()=>{
    ListarSkills().then((res)=>{
      setSkillUsuario(res.data)
    })
  },[])
  console.log(skillsUsuario);
  
  return (
    <Container tabIndex={0}>
      <FaTimes onClick={onClick} style={{justifySelf:"end",alignSelf:"end",margin:"1%"}} tabIndex={0} aria-label='Selecione para fechar o modal'/>
      <DivTitulo tabIndex={0}>
      <Titulo tabIndex={0}>Adicionar skills</Titulo>
      </DivTitulo>
      <DivSkills tabIndex={0}>
        {skillsUsuario.map((skill, index) => (
          <CardSkill key={index} skill={skill} page={"Modal"}/>
          ))}
      </DivSkills>

    </Container>

  )
}
