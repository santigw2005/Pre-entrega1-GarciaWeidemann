let nombreApellido = prompt("Ingrese su nombre y apellido"),
    horario = prompt("Ingrese horario de reserva (usar numeros unicamente)"),

    cantidadPersonas = prompt("Especifique la cantidad de personas que asistiran (Use numeros unicamente)");

    while (cantidadPersonas <= 50) {
        alert("Tenemos mesas disponibles");
        break;
        cantidadPersonas++;
    }
    
    menuElegido = prompt("Ingrese el numero asignado para el/los menu/s deseado/s (Use numeros unicamente, e ingrese todos los menus elegidos utilizando un espacio de por medio)");

    if (menuElegido >= 5) {
        alert("No tenemos ese menú");
    } 

    ubicacionLocal = prompt("Ingrese el numero asignado para el local que seleccionó.");

    if (ubicacionLocal >= 4) {
        alert("Ese local no existe.");
    } 
    
    if (cantidadPersonas >= 50 || menuElegido >=5 || ubicacionLocal >= 4) {
        alert("Esta reserva sera anulada ya que no cumple los requisitos solicitados")
    } else {
        confirmacion = alert("Lo esperamos a las " + horario   + "hs sr/a " + nombreApellido)
    }

    

function datosIngresados() {
    console.log(nombreApellido)
    console.log(horario)
    console.log(cantidadPersonas)
    console.log(menuElegido)
    console.log(ubicacionLocal)
}

datosIngresados()