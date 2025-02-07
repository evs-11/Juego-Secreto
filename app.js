
let numeroSecreto = 0;
let intentos = 0;
listaNumerosSorteados = [];
let numeroMaximo = 20;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//el input de la caja blanca
function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //compara lo que ingreso el usuario con lo que la máquina generó y devuelve un boleano
    //el === es la comparación que debe ser igual en valor y tipo de datos sino retorna falso

    
    if (numeroDeUsuario === numeroSecreto) {
     asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
     document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else{
      //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
          asignarTextoElemento('p','El número secreto es menor');
        }else {
          asignarTextoElemento('p','El número secreto es mayor');   
        }
        // como no acertó se incrementa el contador
        intentos++;
        limpiarCaja();
    }
    return;
}  

function limpiarCaja() {
  //queryselector es un selector genérico, y valorUsuario va con #porque funciona como Id del imput en el index
  // '' es el valor vacio
  document.querySelector('#valorUsuario').value = '';
  
 }

function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo ) {
       asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else {

      //Si el numero generado esta incluido en la lista
      if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto ();
      } else {
          listaNumerosSorteados.push(numeroGenerado);
          return numeroGenerado;
        }
      }  
  }
function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  console.log(numeroSecreto);
}

function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  //Generar el número aleatorio
  //inicializar el número de intentos
  condicionesIniciales();
  //Deshabiliar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();