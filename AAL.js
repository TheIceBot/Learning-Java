let numeros = [];
function render () {
    let mayor = numeros[0]; // Empiezas con el primer elemento

    for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }}

    let minor = numeros[0];
    
    for (let t = 1; t < numeros.length; t++) {
        if (numeros[t] < minor) {
            minor = numeros[t]
        }

    }
    
console.log(`minor: ${minor}`);
console.log(mayor);
}



function AddNumbers () {
    const inputElement = document.querySelector('.input');
    const name = Number(inputElement.value);


    numeros.push(name);
    console.log(numeros);
    render();
}

