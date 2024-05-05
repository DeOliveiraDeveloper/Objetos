const usuarios = [
    //cada dado dentro dessa lista é considerado um Objeto.
    {
        nome: "Eu",
        email: "Casca@de.bala.com",
    },
    {
        nome: "Pedro",
        email: "pedro@pedro.pedro.pe",
    },
    {
        nome: "Pqp",
        email: "meugatopoisumovo@masgatonaopoe.ovo.com",
    }
]

for (let usuario of usuarios){
    console.log(`Nome: ${usuario.nome}, Email: ${usuario.email}`);
}