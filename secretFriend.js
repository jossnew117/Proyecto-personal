//variables
let numeroSecreto = 0;  
let intentos=0;
let numeroMaximo = 10;
let listaDeNumerosSorteados = [];

console.log(numeroSecreto);

//functions
function interfazTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function numeroDeUsuario(){
    let numeroDeUsuario = parseInt(document.getElementById("numeroRegistrado").value);

    if (numeroDeUsuario===numeroSecreto){
                interfazTextoElemento("label", `Genial lo lograste el número secreto es ${numeroSecreto}` );
                document.getElementById("reiniciar").removeAttribute("disabled");
            } else {
                if (numeroDeUsuario>numeroSecreto){
                    interfazTextoElemento("label", "El número secreto es menor");
                
                } else{
                interfazTextoElemento("label", "El número secreto es mayor");
            }
    intentos++;
    limpiarInput();
    }   
    return;
}
// juego
function limpiarInput(){
    document.querySelector("#numeroRegistrado").value ="";
    
}

function generarNumeroSecreto(){
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
console.log(`numero secreto ${numeroGenerado}`);
return numeroGenerado;

}

function condicionesIniciales(){
    interfazTextoElemento("h1", "Bienvenido al juego del número secreto");
    interfazTextoElemento("label", "ingresa un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    limpiarInput();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
   
}
condicionesIniciales ();