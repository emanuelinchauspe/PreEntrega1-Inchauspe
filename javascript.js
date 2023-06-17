function aprenderTablas() {
    let respuesta;
    do {
        alert("Vamos a aprender las tablas!");

        let ingresarNumero = parseInt(prompt("¿De qué número te gustaría aprender?"));

        if (isNaN(ingresarNumero)) {
            alert("Valor inválido. Por favor, ingresa un número.");
            continue; 
        }

        for (let i = 1; i <= 10; i++) {
            let resultado = ingresarNumero * i;
            alert(ingresarNumero + " X " + i + " = " + resultado);
        }

        respuesta = prompt("¿Deseas volver a comenzar? (responde 'si' o 'no')");
    } while (respuesta.toLowerCase() === "si");
}

aprenderTablas();
