let tuCumpleaños = "15/03/20";

//function 
function interfazTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function cumpleaños(){
   let cumpleañosUsuario = document.getElementById("numeroRegistrado").value;
   if (cumpleañosUsuario===tuCumpleaños){
       interfazTextoElemento("label", "Feliz cumpleaños ");
       interfazTextoElemento("p", `Quizás aunque por poco tiempo, desde que te conocí, mis días fueron menos vacíos, grises y aburridos. Eres un bonito recuerdo en mis memorias y aunque no se si momentáneo (espero que no). Admito que fue divertido y disfruté estar contigo desde que te conocí y espero continue siendo así. 
Te quiero, mi delicado pero valiente, susurro de otoño🍂🍂.`);
       document.getElementById("reiniciar").removeAttribute("disabled");
       
       document.getElementById("imagenes").style.display = "block";
       
   }
   return;
}


function condicionesIniciales(){
    interfazTextoElemento("label", "Digita tu cumpleaños (dd/mm/aa)");
    interfazTextoElemento("h1", "Feliz cumpleaños");
    document.getElementById("imagenes").style.display = "none";
    
}
condicionesIniciales();