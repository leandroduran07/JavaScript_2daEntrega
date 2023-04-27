class Paciente {
    constructor(nombre, apellido, edad, sexo, fechaNacimiento, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }
}

let listaPacientes = [];

function agregarPaciente() {
    let nombre = prompt("Ingrese el nombre del paciente:");
    let apellido = prompt("Ingrese el apellido del paciente:");
    let edad = prompt("Ingrese la edad del paciente:");
    let sexo = prompt("Ingrese el sexo del paciente:");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento del paciente:");
    let dni = prompt("Ingrese el número de dni del paciente:");
    let nuevoPaciente = new Paciente(nombre, apellido, edad, sexo, fechaNacimiento, dni);
    listaPacientes.push(nuevoPaciente);
}

function modificarPaciente() {
    let dni = prompt("Ingrese el número de dni del paciente a modificar:");
    let encontrado = false;
    for (let i = 0; i < listaPacientes.length; i++) {
        if (listaPacientes[i].dni == dni) {
            let nombre = prompt(`Ingrese el nuevo nombre del paciente (${listaPacientes[i].nombre}):`);
            let apellido = prompt(`Ingrese el nuevo apellido del paciente (${listaPacientes[i].apellido}):`);
            let edad = prompt(`Ingrese la nueva edad del paciente (${listaPacientes[i].edad}):`);
            let sexo = prompt(`Ingrese el nuevo sexo del paciente (${listaPacientes[i].sexo}):`);
            let fechaNacimiento = prompt(`Ingrese la nueva fecha de nacimiento del paciente (${listaPacientes[i].fechaNacimiento}):`);
            listaPacientes[i].nombre = nombre || listaPacientes[i].nombre;
            listaPacientes[i].apellido = apellido || listaPacientes[i].apellido;
            listaPacientes[i].edad = edad || listaPacientes[i].edad;
            listaPacientes[i].sexo = sexo || listaPacientes[i].sexo;
            listaPacientes[i].fechaNacimiento = fechaNacimiento || listaPacientes[i].fechaNacimiento;
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        alert("No se encontró ningún paciente con ese número de dni.");
    }
}

function eliminarPaciente() {
    let dni = prompt("Ingrese el número de dni del paciente a eliminar:");
    let encontrado = false;
    for (let i = 0; i < listaPacientes.length; i++) {
        if (listaPacientes[i].dni == dni) {
            listaPacientes.splice(i, 1);
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        alert("No se encontró ningún paciente con ese número de dni.");
    }
}



function mostrarPacientes() {
    let mensaje = "\nLista de pacientes:\n\n";
    for (let i = 0; i < listaPacientes.length; i++) {
        mensaje += `Nombre: ${listaPacientes[i].nombre} ${listaPacientes[i].apellido}\n`;
        mensaje += `Edad: ${listaPacientes[i].edad}\n`;
        mensaje += `Sexo: ${listaPacientes[i].sexo}\n`;
        mensaje += `Fecha de Nacimiento: ${listaPacientes[i].fechaNacimiento}\n`;
        mensaje += `Número de dni: ${listaPacientes[i].dni}\n\n`;
    }
    alert(mensaje);
}


function mostrarMenu() {
    let opcion = "";
    while (opcion !== "5") {
        opcion = prompt(`Seleccione una opción:
    1. Agregar paciente
    2. Modificar paciente
    3. Eliminar paciente
    4. Mostrar lista de pacientes
    5. Salir`);
        switch (opcion) {
            case "1":
                agregarPaciente();
                break;
            case "2":
                modificarPaciente();
                break;
            case "3":
                eliminarPaciente();
                break;
            case "4":
                mostrarPacientes();
                break;
            case "5":
                alert("Saliendo del sistema de administración de pacientes...");
                break;
            default:
                alert("Opción no válida.");
                break;
        }
    }
}