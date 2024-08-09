import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
height: 20vh;
width: 100%;
gap: 1%;
justify-content: center;
`
export const DivImagemUsuario= styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 10vw;
height: 20vh;
`
export const ImagemUsuario = styled.img`
height: 80%;
width: 80%;
border-radius: 50%;
` 
export const DivNomeUsuario = styled.div`
display: flex;
width: auto;
height: auto;
align-items: center;

`
export const Texto =styled.p`
font-size: var(--fontsize-titulo);
`