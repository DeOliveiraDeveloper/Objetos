//o "type" armazena apenas Tipos, como String, number...
type TModelo = string;

type TCarro = {
    modelo: string
    marca: string
    ano: number
    cor?: string //se eu quiser transformar uma propriedade opcional, basta colocar "?"
}

//Posso armazenas os tipos assim:
// const carro: {
//     modelo: string,
//     marca: string,
//     ano: number,
//     cor: string
// }

//ou chamar o tipo já pronto, assim:
const carro: TCarro = {
    modelo: 'Palio',
    marca: 'Fiat',
    ano: 2000,
    // cor: 'Cinza'
}

console.log(carro);
