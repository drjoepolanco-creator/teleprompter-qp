let pantalla = document.getElementById("pantalla");
let texto = document.getElementById("texto");
let velocidad = document.getElementById("velocidad");

let intervalo;
let y = window.innerHeight;

function iniciar(){
pantalla.style.display="block";
pantalla.innerText=texto.value;
y=window.innerHeight;

intervalo=setInterval(()=>{
y -= velocidad.value;
pantalla.style.transform=`translateY(${y}px)`;
},30);
}

function pausar(){
clearInterval(intervalo);
}

function reiniciar(){
clearInterval(intervalo);
pantalla.style.display="none";
}
