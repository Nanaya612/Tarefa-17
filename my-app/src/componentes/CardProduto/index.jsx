import { useState } from "react"
import { Botao, Card, Lista, NomeProduto, PreçoProduto } from "./styles"

function CardProduto(){
    const [adicionado, setAddCarrinho] = useState(false)
    const adicionar = () => {
        setAddCarrinho(!adicionado)
        console.log(adicionado)
    }
    const produtos = [
        {nome: 'Celular',
        preço: '999 R$',
        id: 1},
        ]

return (
    <>  
        <Lista>
            {produtos.map(p =>
            <Card key={p.id}>
                <NomeProduto>{p.nome}</NomeProduto>
                <PreçoProduto>{p.preço}</PreçoProduto>
                <Botao $adicionado={adicionado} onClick={adicionar}>{adicionado ? "Adicionado no Carrinho!" : "Adicionar no Carrinho"}</Botao>
            </Card>)}
        </Lista>
    </>
)
}

export default CardProduto