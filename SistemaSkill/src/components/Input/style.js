import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 25rem;
gap: 5px;
@media (max-width: 768px) {
    width: 20rem;
}
@media (max-width: 660px) {
    width: 15rem;
}
@media (max-width: 540px) {
    width: 13rem;
}

`
export const DivTexto = styled.div`
display: flex;
flex-direction: column;
width: 25rem;
margin-left: 2%;
color:black;
font-size: var(--fontsize-texto);
@media (max-width: 768px) {
    width: 20rem;
}
@media(max-width: 660px) {
    width: 15rem;
}
@media (max-width: 540px) {
    width: 13rem;
}
`
export const DivInput= styled.div`
display: flex;
width: 25rem;
height: 3rem;
border-radius: 10px;
background-color: #f2f2f2;
border: 1px solid;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
    width: 20rem;
}
@media (max-width: 660px) {
    width: 15rem;
}
@media (max-width: 540px) {
    width: 13rem;
}
`
export const TextInput = styled.input`
background-color: #f2f2f2;
border: none;
font-size: var(--fontsize-texto);
width: 90%;
height: 3rem;
padding-left: 2%;
outline: none;
`
export const DivTeste = styled.div`
display: flex;
align-self: center;
justify-items: center;



`