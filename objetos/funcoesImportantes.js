const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}


console.log(Object.keys(pessoa)) // Pego as chaves de um objeto
console.log(Object.values(pessoa)) // Pego os valores de um objeto
console.log(Object.entries(pessoa)) // Pego as chaves e valores de objeto em um array dentro de outro


Object.entries(pessoa).forEach((elemento) => {
    console.log(`${elemento[0]}: ${elemento[1]}`)
})


Object.entries(pessoa).forEach(([chave, valor]) => { // Usando destructuring
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(Object.entries(obj))

Object.freeze(obj)
obj.c = 1234
console.log(obj)
