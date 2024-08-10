import styled from 'styled-components';
export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
background-color: #ffffff;
margin: 0;
padding: 0;
`;
export const ContainerBot = styled.div`
display: flex;
flex-direction: row;
height: 90vh;
width: 100vw;
`;
export const ContainerLeft = styled.div`
display: flex;
flex-direction: column;
height: 90vh;
width: 50vw;
gap: 2%;
justify-content: center;
align-items: center;
`
export const DivVoltar = styled.div`
display: flex;
margin: 1%;
height: 5vh;
/* position: fixed;
top: 2vh;
left: 1vw;
right: 0;
bottom: 0; */
`
export const TextoErro = styled.p`
color: var(--cor-vermelha);
`