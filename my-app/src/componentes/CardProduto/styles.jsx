import styled from 'styled-components'

export const Card = styled.li`
border-radius: 12px;
border: 1px solid #000;
padding: 1rem;
list-style: none;
background-color: #000;
color: white;
margin-bottom: 20px;
`
export const Lista = styled.ul`
display: block;
width: 20%;
margin: auto;
`
export const Botao = styled.button`
display:block;
margin: auto;
background-color: ${({$adicionada}) => ($adicionada ? "#6c757d" : "#198754")};
border: none;
border-radius: 5px;
padding: 16px;
color: white;
cursor: pointer;
&:hover {
    background-color: ${({$adicionada}) => ($adicionada ? "#5e6266" : "#077a44;")};
 }
`

export const NomeProduto = styled.h1`
display: flex;
justify-content: center;
aling-items: center;
`
export const PreçoProduto = styled.p`
display: flex;
justify-content: center;
aling-items: center;
`