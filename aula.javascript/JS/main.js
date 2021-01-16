function button(){
    document.getElementById("Página inicial").innerHTML = "<i>Obrigada por clicar</i>";
}
function redirecionar(){
    window.open("https://digitalinnovation.one/sign-in"); // abre em outra janela
    window.location.href = "https://digitalinnovation.one/sign-in"; // abre mesma janela
}    

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por me obedecer";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigada por me obedecer";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
    //alert("Obrigada por clicar");
function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function validaIdade(idade) {
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}    
    var idade = prompt("Insira sua idade:");
    console.log(validaIdade(idade));



/*var day = new Date();
alert(day.getHours());

/*var count = 0;

while(count <5){
    console.log(count);
    count++;
}

/*var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade\nAcesso liberado");
}else{
    alert("Menor de idade\nAcesso negado");
}

/*var nome = "Victoria Mota";
var idade = 29;
var frase = "Japão é um belo país";
alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(frase.toUpperCase());

var fruta = {nome = "maçã", cor: "vermelha"}
console.log(fruta.nome);
*/
//var lista = ["maçã" , "pera" , "laranja"];
//lista.push("uva");
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));*/
