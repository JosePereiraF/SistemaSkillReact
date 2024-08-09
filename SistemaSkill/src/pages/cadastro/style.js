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
export const TextoErro = styled.p`
color: var(--cor-vermelha);
`