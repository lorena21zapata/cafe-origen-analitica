let numeros = [5,3,8,1,-3]
for (let i =0; i <numeros.length; i++){

    for (let j = 0; j< numeros.length-1; j++){

        if (numeros[j] > numeros[j+1]){

            let temporal = numeros[j];

            numeros[j] = numeros[j+1];

            numeros[j+1] = temporal

            console.log(numeros)

        }
    }
}