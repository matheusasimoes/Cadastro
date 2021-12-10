let inserirData = new Date();
let data = ('2021-12-10');

if(inserirData < data) {
    console.log("Continuar cadastro")
}else{
    console.log("Cadastro inválido")
}

let idadeDaPessoa = "25"
if(idadeDaPessoa >= 18) {
    console.log("Idade válida")
} else {
    console.log("Cadastro inválido")
}

let listaDeParticipantes = ["Pedro", "João", "Tiago", "Maria"]
if(listaDeParticipantes.length <= 99) {
    console.log("Cadastro realizado!")
} else {
    console.log("Cadastro inválido, excedeu o limite de participantes.")
}