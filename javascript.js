alert("Vamos a aprender las tablas")

let ingresarNumero = parseInt(prompt("¿Las tablas de qué numéro te gustaría aprender?"));
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}
