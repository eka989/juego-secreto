let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
  let elementoHTML = document.querySelector(elemento); //titulo no es texto, es un objeto
  elementoHTML.innerHTML = texto;
  return; //no es necesario
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //obtenemos el valor del input, es diferente de obtener EL elemento "input"
  //console.log(intentos);
  /*console.log(typeof(numeroDeUsuario));
  console.log(numeroSecreto);
  console.log(typeof(numeroSecreto));
  console.log(numeroDeUsuario);
  console.log(numeroDeUsuario === numeroSecreto);//comparar el valor y el tipo del input con el numero secreto*/
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('h1', '¡Ganaste!');
    asignarTextoElemento('p', `¡Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento!' : 'intentos!'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //fallo
    limpiarCaja();
    if (numeroDeUsuario < numeroSecreto) {
      asignarTextoElemento('h1', '¡Incorrecto!');
      asignarTextoElemento('p', 'El numero es mayor');
      }
    else {
      asignarTextoElemento('h1', '¡Incorrecto!');
      asignarTextoElemento('p', 'El numero es menor');
  }
  intentos++;
  }
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; //nos evitamos generar una variable que almacene el numero secreto
  console.log(listaNumerosSorteados);
  console.log(numeroGenerado);
  //si ya sorteamos todos los numeros, salir
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('h1', '¡Final!');
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.');
    return;
  }
  //si el numero generado ya esta en la lista, generamos otro numero
  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto(); //la funcion se llama a si misma, es recursiva
  } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}

function limpiarCaja () {
  let valorCaja = document.querySelector('#valorUsuario').value = '';//no es necesario el querySelector, se puede hacer directamente con el id
  valorCaja.value = ''; //vacio
}

function condicionesIniciales() {
  asignarTextoElemento ('h1', 'Juego del Número Secreto');
  asignarTextoElemento ('p', `Indica un número del 1 al ${numeroMaximo}:`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1
}

function reiniciarJuego() {
  //limpiar la caja, mensaje 1 a 10, generar nuevo num aleatorio, deshabilitar boton, reiniciar intentos
  limpiarCaja();
  //console.clear();
  condicionesIniciales();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');//pide 2 parametros, el atributo y el valor, el remove no necesita valor
}

reiniciarJuego(); //inicializar el juego
