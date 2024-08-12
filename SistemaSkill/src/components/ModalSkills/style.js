import styled from 'styled-components';

export const Container = styled.div`
display: flex;
position: fixed;
flex-direction: column;
height: 60vh;
width: 60vw;
background-color: #ffffff;
justify-content: center;
align-items: center;
box-shadow: 0px 4px 8px #0f0f0f;
border-radius: 15px;
`
export const DivTitulo = styled.div`
display: flex;
height: 10vh;
justify-content: center;
align-items: center;
width: 100%;
`
export const Titulo = styled.p`
display: flex;
font-size: var(--fontsize-titulo);
`
export const DivSkills = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
overflow-y: auto;
`