import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 40vw;
background-color: var(--cor-cinza);
height: 30vh;
margin: 1rem;
box-shadow: 0px 4px 8px #0f0f0f;
border-radius: 15px;
@media (max-width: 768px) {
  min-width: 50vw;
}
@media (max-width: 660px) {
    height: auto;
}

`
export const DivExcluir = styled.div`
display: flex;
justify-self: end;
align-self: self-end;
padding-top: 3%;
padding-right: 3%;
gap: 10px;
`
export const DivSkill = styled.div`
display: flex;
flex-direction: row;
flex-shrink: 0;
width: 100%;
@media (max-width: 768px) {
   
}
@media (max-width: 660px) {
   flex-direction: column;
   align-items: center;
   height: 50vh;
   gap: 2%;
}

`
export const DivImagem = styled.div`
display: flex;
flex-direction: column;
width: 10vw;
height: 20vh;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
   min-width: 15vw;
}
@media (max-width: 660px) {
    flex-direction: column-reverse;

}

`
export const ImagemSkill = styled.img`
width: 80%;
height: 80%;
`
export const DivNivel = styled.div`
display: flex;
flex-direction: column;
width: 15vw;
justify-content: center;
align-items: center;
gap: 20%;
@media (max-width: 768px) {
    min-width: 15vw;
}
@media (max-width: 660px) {
    height: auto;
}

`
export const TituloNivel = styled.p`
display: flex;
color: black;
font-size: var(--fontsize-texto);
`
export const DivAvaliacao = styled.div`
display: flex;
flex-direction: row-reverse;

`
export const DivDescricao = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 10px;
gap: 10px;
width: 15vw;

`
export const DivTextoDescricao= styled.div`
max-height: 15vh;
overflow-y: auto;

`
export const TextoDescricao = styled.p`
font-size: 15px;

`