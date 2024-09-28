const resultado = document.getElementById("resultado")
    
    const notaMinima = 7;
    const faltasMaxima = 20;

    let nota = 6;
    let faltas = 20;
    let texto;

    if(nota >= notaMinima && faltas <= faltasMaxima){
        texto =  "Aprovado";

    } else if (nota >= notaMinima && faltas >= faltasMaxima){
        texto =  "Reprovado";

    } else if (nota <= notaMinima && faltas <= faltasMaxima){   
        texto =  "Reprovado";
    
    } else {
       texto =  "Reprovado";
    }
       
    resultado.innerHTML = texto;

