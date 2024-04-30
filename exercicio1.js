const info = {
    nome: 'Caio',
    idade: 20,
    altura: 1.70,
    temCNH: true,
    habilidades: ['Nenhuma'], //ou poderia ter feito ['Java', 'CFTV', 'Python']
}
// Se info.temCNH for true, a variável possuiCNH recebe 'possui', se não, recebe 'não possui'.
const possuiCNH = info.temCNH ? 'possui' : 'não possui';

console.log(`${info.nome} tem ${info.idade} anos,${info.altura} de altura, e ${possuiCNH} CNH, e as seguintes Habilidades:`);
// Para cada item da lista de habilidades, imprima o valor da habilidade enquanto tiver.
for (let item of info.habilidades){
    console.log(`- ${item}`);
}
