import React, { useContext, useEffect, useState } from 'react'
import styles from '../../components/AvaliacaoIcon/styles.module.css'
import { SistemaContext } from '../../contexts/SistemaSkill/sistemaSkill'
import { FaStar } from 'react-icons/fa';
import { IconButton } from '@mui/material';
import { AtualizarSkill } from '../../service/Usuario/usuario';
export default function Avaliacao({props}) {
  const {usuario,skillsUsuario,setSkillUsuario}=useContext(SistemaContext);
  const[nivelEstrela,setNivelEstrela]=useState(0);

  const avaliar= async(valor,texto)=>{
    
    const atualizarSkill ={
      idUsuario:usuario.id,
      idSkill:props.id,
      nivel:props.nivel =="Basico"?0:props.nivel=="Intermediario"?1:2
    }
    try{
      AtualizarSkill(atualizarSkill);
      setSkillUsuario(skillsUsuario.map(item=> item.id === props.id?{...item, nivel:texto}:item))
      console.log(valor);
      
    }catch(error){
      console.log(error);
    }
  }


  
  return (
    <div className={styles.container}>
    <IconButton aria-label="add to favorites" onClick={()=>avaliar(2,"Avançado")}>
      <FaStar className={styles.estrela} style={{color:props.nivel =="Avançado"?" #ffbf00":""}}/>
    </IconButton>
    <IconButton aria-label="add to favorites" onClick={()=>avaliar(1,"Intermediario")}>
      <FaStar className={styles.estrela} style={{color:props.nivel !="Basico"&& props.nivel !=null?"#ffbf00":""}}/>
    </IconButton>
    <IconButton aria-label="add to favorites" onClick={()=>avaliar(0,"Basico")}>
      <FaStar className={styles.estrela}  style={{color:props.nivel !=null?"#ffbf00":""}}/>
    </IconButton>
    </div>
  )
}
