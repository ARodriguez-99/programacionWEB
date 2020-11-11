const texto = document.getElementById("texto");
const boton = document.getElementById("boton");
const texto1 = document.getElementById("texto1");
const img1 = document.getElementById("img1");
const boton1 = document.getElementById("boton1");
const texto2 = document.getElementById("texto2");
const texto3 = document.getElementById("texto3");
const texto4 = document.getElementById("texto4");
const ul1 = document.getElementById("ul1");
const boton2 = document.getElementById("boton2");
const ul2 = document.getElementById("ul2");
const boton3 = document.getElementById("boton3");
const ul3 = document.getElementById("ul3");
const boton4 = document.getElementById("boton4");

function mostrarTexto(){
	texto.style.visibility = "visible";
}
boton.addEventListener("mouseup",mostrarTexto);

function mostrarTexto1(){
	texto1.style.visibility = "visible";
	img1.style.visibility = "visible";
}
boton1.addEventListener("mouseup",mostrarTexto1);

function mostrarTexto2(){
	texto2.style.visibility = "visible";
	texto3.style.visibility = "visible";
	texto4.style.visibility = "visible";
	ul1.style.visibility = "visible";
}
boton2.addEventListener("mouseup",mostrarTexto2);

function mostrarTexto3(){
	ul2.style.visibility = "visible";
}
boton3.addEventListener("mouseup",mostrarTexto3);

function mostrarTexto4(){
	ul3.style.visibility = "visible";
}
boton4.addEventListener("mouseup",mostrarTexto4);