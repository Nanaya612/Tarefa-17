import { useState } from "react"
import { Botao, Card, Lista, NomeProduto, PreçoProduto } from "./styles"

function CardProduto(){
    const [adicionadoCarrinho, setAddCarrinho] = useState(false)
    const adicionar = () => {
        setAddCarrinho(!adicionadoCarrinho)
        console.log(adicionadoCarrinho)
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
                <Botao $adicionado={adicionadoCarrinho} onClick={adicionar}>{adicionadoCarrinho ? "Adicionado no Carrinho!" : "Adicionar no Carrinho"}</Botao>
            </Card>)}
        </Lista>
    </>
)
}

export default CardProduto