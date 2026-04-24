import styled from 'styled-components'

export const Card = styled.li`
width: 600px;
height: 200px;
border-radius: 12px;
border: 1px solid #000;
list-style: none;
background-color: #000;
color: white;
padding-bottom: 20px;
margin-bottom: 20px;
@media (max-width: 600px){
width: 450px;
height: 250px;
}
`
export const Lista = styled.ul`
display: flex;
justify-content: center;
margin: 0;
padding: 0;
`
export const Botao = styled.button`
display: flex;
justify-content: center;
margin: auto;
padding: 1rem;
background-color: ${({$adicionado}) => ($adicionado ? "#198754" : "#6c757d")};
border: 1px solid #000;
border-radius: 16px;
color: white;
font-size: 14px;
cursor: pointer;
&:hover {
    background-color: ${({$adicionado}) => ($adicionado ? "#077a44" : "#5e6266")};
 }
@media (max-width: 600px){
font-size: 17px;
padding: 1.5rem;
}
`

export const NomeProduto = styled.h1`
display: flex;
justify-content: center;
font-size: 40px;
@media (max-width: 600px){
font-size: 45px;
}
`
export const PreçoProduto = styled.p`
display: flex;
justify-content: center;
font-size: 18px;
font-weight: bold;
@media (max-width: 600px){
font-size: 20px;
}
`