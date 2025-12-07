/* ==== Funcionalidad mínima para el prototipo visual  ==== */

// Se obtiene el botón y el input
const input = document.getElementById("searchInput");
const btn = document.getElementById("btnBuscar");

// Evento para mostrar en consola lo que busca el usuario
btn.addEventListener("click", () => {
    console.log("Buscando recetas con el ingrediente:", input.value);

    // Mostrar también en pantalla como prueba visual
    alert("Buscando recetas con el ingrediente: " + input.value);
});
