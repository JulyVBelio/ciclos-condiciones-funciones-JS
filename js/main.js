// Recuperar el elemento en HTML que contiene el número que cambiará
let numero = document.getElementById('numero');

// Recuperar los botones de incrementa, decrementa y personalizado
let incrementa = document.getElementById('incrementa');
let decrementa = document.getElementById('decrementa');
let personalizado = document.getElementById('personalizado');

// Variable con ámbito globlal
let valor;

// Recuperar el botón de ejecutar
let ejecutar = document.getElementById('boton-ejecutar');

incrementa.addEventListener('click', function(){
    // Convertir primero la cadena de texto a número
    valor = parseInt(numero.innerHTML, 10);
    numero.innerHTML = valor + 1;

    // Ocultar los elementos para personalización en HTML
    document.getElementById('max-min').style.visibility = 'hidden';
    // Ocultar la alerta si es que esta visible
    document.getElementById('alerta').hidden = true;
});

decrementa.addEventListener('click', function(){
    // Convertir primero la cadena de texto a número
    valor = parseInt(numero.innerHTML, 10);
    numero.innerHTML = valor - 1;

    // Ocultar los elementos para personalización en HTML
    document.getElementById('max-min').style.visibility = 'hidden';
    // Ocultar la alerta si es que esta visible
    document.getElementById('alerta').hidden = true;
});

personalizado.addEventListener('click', function(){
    // Mostrar los elementos para personalización en HTML
    document.getElementById('max-min').style.visibility = 'visible';

    // Automáticamente poner una propuesta al usuario
    document.getElementById('min').value = 0;
    document.getElementById('max').value = 0;

    // Ocultar la alerta si es que esta visible
    document.getElementById('alerta').hidden = true;
});

ejecutar.addEventListener('click', function(){
    document.getElementById('alerta').hidden = true;
    let minimo = parseInt(document.getElementById('min').value, 10);
    let maximo = parseInt(document.getElementById('max').value, 10);    
    
    if(maximo >= minimo){
        for(let i = 0; i <= maximo - minimo; i++){
            // La función setTimeout() 
            setTimeout(() => {
                numero.innerHTML = i + minimo;
            }, 500 * i);
        }
    }
    else{
        // alert('El valor máximo debe ser mayor o igual al valor mínimo');
        document.getElementById('alerta').hidden = false;
        document.getElementById('min').value = '0';
        document.getElementById('max').value = '0';
    }
});