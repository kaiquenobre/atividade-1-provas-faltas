const resultado = document.getElementById("resultado")
    
const nomeValido = "Kaique";
const senhaCorreta = "K123";

let nome = "Kaique";
let senha = "K123";
let texto;

if(nome == nomeValido && senha == senhaCorreta){
    texto =  "Acesso autorizado";

} else if (nome == nomeValido && senha != senhaCorreta){
    texto =  "Acesso não autorizado";

} else if (nome != nomeValido && senha == senhaCorreta){   
    texto =  "Acesso não autorizado";
    
} else {
    texto =  "Acesso não autorizado";
}
       
resultado.innerHTML = texto;

