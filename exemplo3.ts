const IP = {
    ipMaq: "192.168.0.1",
    mac: "00:00:00:00:00:00"
}

const user = {
    nome: "De Oliveira",
    pst_grad: "Cb",
    tempoDeServico: "Infinitos anos",
    ip: IP,
    habilidades: ["Curso de Formação de cabos", "Movimentação de produtos perigosos", "Paz no exterior", "Desenvolvimento de Software"],
}
//aqui eu consigo imprimir o valor que está dentro de user e dentro de IP
console.log(user.ip.ipMaq);
//aqui eu consigo imprimir o valor que está dentro de user e dentro de habilidades, e escolher qual item eu quero imprimir
console.log(user.habilidades[1]);
//e aqui eu consigo imprimir todos os valores que estão dentro de user e dentro de habilidades e exibir em uma lista,
//porque toda vez que o for passa por um item ele vai imprimir o que está dentro de item.
for (let item of user.habilidades) {
    console.log(`- ${item}`);
}

