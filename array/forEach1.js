const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`)
})

console.log()

aprovados.forEach(nome => console.log(nome))

console.log()

const exibirAprovados = (aprovado, indice, sla) => console.log(`${indice}) ${aprovado} | ${sla}`)
aprovados.forEach(exibirAprovados)