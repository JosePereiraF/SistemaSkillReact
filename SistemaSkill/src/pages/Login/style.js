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
export const ContainerLeftTop = styled.div`
display: flex;
height: 30vh;
width: 40vw;
justify-content: center;
align-items: center;
`
export const ContainerLeftBot = styled.div`
display: flex;
width: 50vw;
height: 60vh;
justify-content: start;
align-items: center;
flex-direction: column;
gap: 3%;
`
export const DivCadastro = styled.div`
display: flex;
width: 25rem;
`
export const DivSalvarCredecial= styled.div`
display: flex;
width: 25rem;
flex-direction: row;
margin-left: 3%;
align-self: center;
`
export const CheckBox = styled.input`

`
export const Cadastro = styled.a`
display: flex;
font-size: 20px;
width: auto;
margin-left: 3%;
text-decoration: none;
color: blue;
align-self: self-start;
`;
export const TextoErro = styled.p`
color: var(--cor-vermelha);
`

