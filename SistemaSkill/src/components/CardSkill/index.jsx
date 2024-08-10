import React, { useContext, useEffect, useState } from 'react'
import { Container, DivAvaliacao, DivDescricao, DivExcluir, DivImagem, DivNivel, DivSkill, ImagemSkill, TextoDescricao, TituloNivel } from './style'
import { FaPlusCircle, FaStar, FaSyncAlt, FaTrash } from 'react-icons/fa';
import { AdicionarUsuarioSkill, AtualizarSkill, BuscarFotoSkill, DeletarSkillUsuario, FotoSkill } from '../../service/Usuario/usuario';
import { SistemaContext } from '../../contexts/SistemaSkill/sistemaSkill';
import { IconButton } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
export default function CardSkill({onClick,skill,page}) {
  const [nivel,setNivel]=useState(0);
  const [botaoAvaliar,setBotaoAvaliar]=useState(false);
  
  const {usuario,skillsUsuario,setSkillUsuario,skillsAdicionar,setSkillsAdicionar,ativarMensagem,setAtivarMensagem,setMensagem}=useContext(SistemaContext);
  const deletarSkill= async()=>{
    const excluirSkill ={
      idUsuario:usuario.id,
      idSkill:skill.id
    }
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
      idUsario:1,
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
      <DivExcluir>
        {botaoAvaliar&&(
        <FaSyncAlt onClick={confimarAvalicao} />
        )}
      <FaTrash onClick={deletarSkill}/>
      </DivExcluir>
      )
      }
      {page =="Modal"&&(
      <DivExcluir>
      <FaPlusCircle onClick={adicionarSkill}/>
      </DivExcluir>
      )
      }
      <DivSkill>
        <DivImagem>
            <ImagemSkill src={skill.foto}/>
            <p>{skill.nome}</p>
        </DivImagem>
        <DivNivel>
        <TituloNivel>{skill.nivel}</TituloNivel>
        <DivAvaliacao>
        <IconButton aria-label="add to favorites" onClick={()=>avaliar(2,"Avançado")}>
            <FaStar style={{color:skill.nivel =="Avançado"?" #ffbf00":""}}/>
        </IconButton>
        <IconButton aria-label="add to favorites" onClick={()=>avaliar(1,"Intermediario")}>
          <FaStar style={{color:skill.nivel !="Basico"&& skill.nivel !=null?"#ffbf00":""}}/>
        </IconButton>
        <IconButton aria-label="add to favorites" onClick={()=>avaliar(0,"Basico")}>
          <FaStar  style={{color:skill.nivel !=null?"#ffbf00":""}}/>
        </IconButton>
        </DivAvaliacao>
        </DivNivel>
        <DivDescricao>
          <p >Descricão</p>
          <div style={{maxHeight:"15vh", overflowY:"auto"}}>
          <TextoDescricao>{skill.descricao}</TextoDescricao>
          </div>
          </DivDescricao>
      </DivSkill>
 
    </Container>

  )
}
