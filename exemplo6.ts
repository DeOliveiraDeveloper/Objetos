// rest --> resto ou sobra:

const pessoas = ['Pedro', 'Thiago', 'João']
      //item1 no caso seria o valor na posição 0 na Array
const [item1, ...resto] = pessoas

// console.log(resto);

const user = {
    nome: 'Pedro',
    idade: 25,
    email: 'exemplo@ex.com'
}

const {idade, ...sobra} = user

// console.log(idade);

//spread --> espalhamento

const carros = ["BMW", "Mercedes"]
                  //mesmo tendo a mesma sintaxe, usando os "..." ele junta uma array com outra
const novoCarro = [...carros, "Ferrari", "Civic"]

console.log(novoCarro);
