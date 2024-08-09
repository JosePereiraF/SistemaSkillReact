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
    <Container>
      <FaTimes onClick={onClick} style={{justifySelf:"end",alignSelf:"end",margin:"1%"}}/>
      <DivTitulo>
      <Titulo>Adicionar skills</Titulo>
      </DivTitulo>
      <DivSkills>
        {skillsUsuario.map((skill, index) => (
          <CardSkill key={index} skill={skill} page={"Modal"}/>
          ))}
      </DivSkills>
    </Container>

  )
}
