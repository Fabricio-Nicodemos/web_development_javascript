const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem uso do Callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


// Com uso do Callback
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)


// Com uso do Callback
const notasMenorQue7 = nota => nota < 7
const notasMenorQue7dois = function (nota) { return nota < 7}
const notasBaixas3 = notas.filter(notasMenorQue7)
const notasBaixas3dois = notas.filter(notasMenorQue7dois)
console.log(notasBaixas3)
console.log(notasBaixas3dois)
