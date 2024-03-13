// Palavras fundados
export const palavrasEscolaFundador = {
    probablyWords: [
        "fundou", "escola",
        "dizer", "criou",
        "foi", "criador","instituição", "educacional"
    ],
    matched: 0,
    answer: "QUem fundou a escola foi XYZXAS"
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "curso", "técnico", "escola",
        "oferece", "sabe", "instituição",
        "disponível", "área", "técnica", "cursos", "técnicos"
    ],
    matched: 0,
    answer: "Oferecemos os cursos técnicos XYZXAADJASD"
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "saber", "matricular",
       "rematricular", "filha","fazer", "matrícula",
       "rematrícula", "filho", "documentos", "necessários",
       "escola"
    ],
    matched: 0,
    answer: "Para matricular Deve ser feito XYZ, e para matricular ABC"
}

// QUALQUER OUTRA PERGUNTA
// Ex: falar que não sabe e para ligar para a instituição
export const palavrasAleatorias = {
    probablyWords: [
        "futebol", "esporte", "cadeira", "mundial do Palmeiras", 
        "lol", "cachorro", "maquiagem", "comida", "caneta"
    ], 
    matched: 0,
    answer: "Não sei falar sobre esse assunto"
}

function showAnswer(index) {
    // Retorne uma string como resposta
    // Exemplo: "Minha resposta"
    switch (index) {
        case 0:
            return palavrasEscolaFundador.answer
        case 1:
            return palavrasCursosTecnicos.answer
        case 2:
            return palavrasMatricula.answer    
        default:
            return palavrasAleatorias.answer
    }
}

export function mostProbablyQuestion() {
    // Veja quem teve mais matches dos bancos
    // Chame a showAnswer com o parâmetro
    let matches = [
        palavrasEscolaFundador.matched,
        palavrasCursosTecnicos.matched,
        palavrasMatricula.matched,
        palavrasAleatorias.matched,
    ]
    console.log(matches)
    return showAnswer(matches.indexOf(Math.max(...matches)))
}


// Abordagem do papo furado foi criar um bando de conhecimento com
// palavras aleatórias e depois ver o matched, junto dos outros bancos
    

