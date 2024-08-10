import React from 'react'
import { Container } from './style'
import Modal from '../../components/ModalSkills'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Teste() {
  const funcao =()=>{
    toast.success("Skill Atualizada com sucesso!",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <Container>
        {/* <Modal/> */}
        <button onClick={funcao}>aperte aqui</button>

    </Container>
  )
}
