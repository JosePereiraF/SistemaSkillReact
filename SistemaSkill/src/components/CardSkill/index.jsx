import React, { useContext, useEffect, useState } from 'react'
import { Container, DivAvaliacao, DivDescricao, DivExcluir, DivImagem, DivNivel, DivSkill, DivTextoDescricao, ImagemSkill, TextoDescricao, TituloNivel } from './style'
import { FaPlusCircle, FaStar, FaSyncAlt, FaTrash } from 'react-icons/fa';
import { AdicionarUsuarioSkill, AtualizarSkill, BuscarFotoSkill, DeletarSkillUsuario, FotoSkill } from '../../service/Usuario/usuario';
import { SistemaContext } from '../../contexts/SistemaSkill/sistemaSkill';
import { IconButton } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
export default function CardSkill({skill,page}) {
  const [nivel,setNivel]=useState(0);
  const [botaoAvaliar,setBotaoAvaliar]=useState(false);
  
  const {usuario,skillsUsuario,setSkillUsuario,skillsAdicionar,setSkillsAdicionar}=useContext(SistemaContext);
  const deletarSkill= async()=>{
    const excluirSkill ={
      idUsuario:usuario.id,
      idSkill:skill.id
    }
    console.log(skill);
    
    try {
      DeletarSkillUsuario(excluirSkill);
      const skills = skillsUsuario.filter(item => item.id !== excluirSkill.idSkill)
      toast.success("Skill deletada com sucesso!",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSkillUsuario(skills);
    } catch (error) {
      console.log(error);
      
    }
  }

  
  const avaliar= (valor,texto)=>{
    setNivel(valor);
    if(!botaoAvaliar){
      setBotaoAvaliar(!botaoAvaliar);
    }
    setSkillUsuario(skillsUsuario.map(item=> item.id === skill.id?{...item, nivel:texto}:item))
  }
  const confimarAvalicao=async()=>{
    const atualizarSkill ={
      idUsuario:usuario.id,
      idSkill:skill.id,
      nivel:nivel
    }
    try {
      AtualizarSkill(atualizarSkill);
      setBotaoAvaliar(!botaoAvaliar);
      toast.success("Skill Atualizada com sucesso!",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    } catch (error) {
      
    }
  }
  
  const adicionarSkill= async()=>{
    const adicionarSkillUsuario={
      idUsuario:usuario.id,
      skill:[
        {
          id:skill.id,
          nivel:nivel
        }
      ]
    }
    try {
      AdicionarUsuarioSkill(adicionarSkillUsuario);
      setSkillsAdicionar([...skillsAdicionar,skill])
      const skills = skillsUsuario.filter(item => item.id !== adicionarSkillUsuario.skill[0].id)
      setSkillUsuario(skills);
      toast.success("Skill Adicionada com sucesso!",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      
    }
  }

  return (
    <Container>
      {page =="Home"&&(
      <DivExcluir tabIndex={0}>
        {botaoAvaliar&&(
        <FaSyncAlt onClick={confimarAvalicao} tabIndex={0} aria-label='Selecione para Atualizar o nivel da sua skill'/>
        )}
      <FaTrash onClick={deletarSkill} tabIndex={0} aria-label='Selecione para excluir a skill'/>
      </DivExcluir>
      )
      }
      {page =="Modal"&&(
      <DivExcluir tabIndex={0}>
      <FaPlusCircle onClick={adicionarSkill} tabIndex={0} aria-label='Selecione para abrir o modal de novas skills'/>
      </DivExcluir>
      )
      }
      <DivSkill>
        <DivImagem tabIndex={0}>
            <ImagemSkill src={skill.foto} tabIndex={0} aria-label={"Imagem sobre a skill "+skill.nome}/>
            <p tabIndex={0}>{skill.nome}</p>
        </DivImagem>
        <DivNivel tabIndex={0}>
        <TituloNivel tabIndex={0}>{skill.nivel}</TituloNivel>
        <DivAvaliacao>
        <IconButton  onClick={()=>avaliar(2,"Avançado")} tabIndex={0} aria-label={'Selecione para Adicionar o nivel avancado a skill '+skill.nome}>
            <FaStar style={{color:skill.nivel =="Avançado"?" #ffbf00":""}} tabIndex={0} aria-label={"imagem de uma estrela"}/>
        </IconButton>
        <IconButton  onClick={()=>avaliar(1,"Intermediario")} tabIndex={0} aria-label={'Selecione para Adicionar o nivel Intermediario a skill '+skill.nome}>
          <FaStar style={{color:skill.nivel !="Basico"&& skill.nivel !=null?"#ffbf00":""}} tabIndex={0} aria-label={"imagem de uma estrela"}/>
        </IconButton>
        <IconButton onClick={()=>avaliar(0,"Basico")} tabIndex={0} aria-label={'Selecione para Adicionar o nivel basico a skill '+skill.nome}>
          <FaStar  style={{color:skill.nivel !=null?"#ffbf00":""}} tabIndex={0} aria-label={"imagem de uma estrela"} />
        </IconButton>
        </DivAvaliacao>
        </DivNivel>
        <DivDescricao tabIndex={0}>
          <p tabIndex={0}>Descricão</p>
          <DivTextoDescricao tabIndex={0}>

          <TextoDescricao tabIndex={0}>{skill.descricao}</TextoDescricao>
          </DivTextoDescricao>
          </DivDescricao>
      </DivSkill>
 
    </Container>

  )
}
