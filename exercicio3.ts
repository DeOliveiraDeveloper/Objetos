import { NOMEM } from "dns"

type TProduto = {
    nome: string
    preco: number
    qtd: number
}

type TCliente = {
    nome: string
    idade: number
    produtosConsumidos: TProduto[]
}

const cartao: TCliente = {
    nome: "Jonson",
    idade: 20,
    produtosConsumidos: [
        {
            nome: "Coca",
            preco: 5,
            qtd: 1
        },
        {
            nome: "Doritos",
            preco: 9,
            qtd: 1
        },
        {
            nome: "Arroz",
            preco: 10,
            qtd: 1
        }
    ]
} 

console.log(cartao);
