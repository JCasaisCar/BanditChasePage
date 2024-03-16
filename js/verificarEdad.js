// Preguntar al usuario su edad
let edad = prompt("¿Cuál es tu edad?");
let opcion = parseInt(edad);

// Verificar la edad con un switch
switch (true) {
    case (opcion >= 18):
        alert("¡Bienvenido!");
        window.location.href = "../html/index.html";
        break;
    case (opcion >= 0 && opcion <= 3):
        window.location.href = "https://www.dodot.es/";
        break;
    case (opcion >= 4 && opcion <= 6):
        window.location.href = "https://www.pocoyo.com/";
        break;
    case (opcion >= 7 && opcion <= 12):
        window.location.href = "https://www.wizardingworld.com/";
        break;
    case (opcion >= 13 && opcion <= 17):
        window.location.href = "https://www.lego.com/es-es";
        break;
    default:
        window.location.href = "https://www.google.com/";
}
