import { palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula, palavrasAleatorias,mostProbablyQuestion } from './posso-responder.js'

const bancoPergunta = [ 
    palavrasCursosTecnicos, palavrasEscolaFundador, palavrasMatricula, palavrasAleatorias
]

let pergunta1 = "Qual o nome do fundador da instituição ? Quem era ele"
pergunta1 = pergunta1.split(' ')

let pergunta2 = "A escola oferece curso técnico ? Quais ?"
pergunta2 = pergunta2.split(' ')

let pergunta3 = "Onde entro em contato pra matricula ou rematricula ?"
pergunta3 = pergunta3.split(' ')

let pergunta4 = "Posso jogar lol ou assistir futebol durante a aula ?"
pergunta4 = pergunta4.split(' ')


// Ver os matches da pergunta 1 e responder ("Qual o nome do fundador da instituição ? Quem era ele")
for (let i = 0; i < pergunta1.length; i++) { // Verificar as palavras da pergunta
    for (let j = 0; j < bancoPergunta.length; j++) { // Verificar os bancos de conhecimento
        if (bancoPergunta[j].probablyWords.indexOf(pergunta1[i]) !== -1) { // Se a palavra for a mais tensionada
            if(pergunta1.includes("fundador")){ // Caso tenha a palavra "fundados" faça um tensione mais
                palavrasEscolaFundador.matched += 5
                break
            }
            palavrasEscolaFundador.matched++

         }
        }
    }

console.log(pergunta1)
console.log(mostProbablyQuestion()) 
console.log("---------------------------")



// Ver os matches da pergunta 2 e responder ("A escola oferece curso técnico ? Quais ?")
for (let i = 0; i < pergunta2.length; i++) {  // Verificar as palavras da pergunta
    for (let j = 0; j < bancoPergunta.length; j++) { // Verificar os bancos de conhecimento
        if (bancoPergunta[j].probablyWords.indexOf(pergunta2[i]) !== -1) { // Se a palavra for a mais tensionada
            if(pergunta2.includes("cursos")){ // Caso tenha a palavra "fundados" faça um tensione mais
                palavrasCursosTecnicos.matched += 5
                break
            }
            palavrasCursosTecnicos.matched++
         }
    }
}

console.log(pergunta2)
console.log(mostProbablyQuestion())
console.log("---------------------------")

// Ver os matches da pergunta 3 e responder ("Onde entro em contato pra matricula ou rematricula ?")
for (let i = 0; i < pergunta3.length; i++) { // Verificar as palavras da pergunta
    for (let j = 0; j < bancoPergunta.length; j++) {  // Verificar os bancos de conhecimento
        if (bancoPergunta[j].probablyWords.indexOf(pergunta3[i]) !== -1) { // Se a palavra for a mais tensionada
            if(pergunta3.includes("matricula")){ // Caso tenha a palavra "fundados" faça um tensione mais
                palavrasMatricula.matched += 5
                break
            }
            palavrasMatricula.matched++
         }
    }
}
console.log(pergunta3)
console.log(mostProbablyQuestion())
console.log("---------------------------")

// Ver os matches da pergunta 4 e responder ("Posso jogar lol ou assistir futebol durante a aula ?")
for (let i = 0; i < pergunta4.length; i++) { // Verificar as palavras da pergunta
    for (let j = 0; j < bancoPergunta.length; j++) { // Verificar os bancos de conhecimento
        if (bancoPergunta[j].probablyWords.indexOf(pergunta4[i]) !== -1) {  // Se a palavra for a mais tensionada
            if(pergunta4.includes("lol")){ // Caso tenha a palavra "fundados" faça um tensione mais
                palavrasAleatorias.matched += 5 
                break
            }
            palavrasAleatorias.matched++
         }
    }
}
console.log(pergunta4)
console.log(mostProbablyQuestion())
console.log("---------------------------")
