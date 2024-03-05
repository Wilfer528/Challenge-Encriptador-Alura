var botonEncriptar = document.querySelector(".boton-encriptar")
var botonDesencriptar = document.querySelector(".boton-desencriptar")
var persona = document.querySelector(".contenedor-persona")
var contenedor = document.querySelector(".contenedor-parrafo")
var resultado = document.querySelector(".texto-resultado")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto ()
    console.log(cajaTexto)
    resultado.textContent = encriptarTexto (cajaTexto)
}

function desencriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto ()
    resultado.textContent = desencriptarTexto (cajaTexto);
    console.log(desencriptar)
}

function recuperarTexto (){
    var cajaTexto = document.querySelector(".cajatexto");
    console.log(cajaTexto)
    return cajaTexto.value;
}

function ocultarAdelante(){
    persona.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = btoa(texto);

    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje; 
    var textoFinal = atob(texto);
    
    return textoFinal
}

const botonCopiar = document.querySelector(".boton-copiar");
botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("copiar")
})




