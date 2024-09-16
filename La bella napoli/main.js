let pedidos = [];

while (true) {
    let plato = prompt("Indique un plato :\n1 - Ñoquis\n2 - Sorrentinos\n3 - Tallarines\n4 - Canelones\n(Escribe 'esc' para salir)");
    
    if (plato === "esc" || plato === null) break;

    let platoSeleccionado;
    switch (plato) {
        case "1":
            platoSeleccionado = "Ñoquis";
            break;
        case "2":
            platoSeleccionado = "Sorrentinos";
            break;
        case "3":
            platoSeleccionado = "Tallarines";
            break;
        case "4":
            platoSeleccionado = "Canelones";
            break;
        default:
            alert("Por favor, selecciona una opción válida de platos.");
            continue;
    }

    let salsa = prompt("Indique su salsa :\n1 - Tuco\n2 - Crema\n3 - Mixta\n(Escribe 'esc' para salir)");
    
    if (salsa === "esc" || salsa === null) break; 
    
    let salsaSeleccionada;
    switch (salsa) {
        case "1":
            salsaSeleccionada = "Tuco";
            break;
        case "2":
            salsaSeleccionada = "Crema";
            break;
        case "3":
            salsaSeleccionada = "Mixta";
            break;
        default:
            alert("Por favor, selecciona una opción válida de salsa.");
            continue; 
    }

    let pedidoCompleto = {
        plato: platoSeleccionado,
        salsa: salsaSeleccionada
    };

    pedidos.push(pedidoCompleto);

    let continuar = prompt("¿Desea agregar otro plato? (Escriba 'esc' para finalizar el pedido.)");
    if (continuar === "esc" || continuar === null) break;
}

if (pedidos.length > 0) {
    console.log("Platos pedidos:");
    for (let i = 0; i < pedidos.length; i++) {
        console.log(`Plato: ${pedidos[i].plato}, Salsa: ${pedidos[i].salsa}`);
    }
} else {
    console.log("No se realizaron pedidos.");
}
