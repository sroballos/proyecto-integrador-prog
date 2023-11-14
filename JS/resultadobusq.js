

function guardarRespuesta() {
  let campoBusqueda = document.getElementById("campoBusqueda");
  a = campoBusqueda.value; // Guarda el valor del campo de búsqueda en la variable "a"
  console.log("Respuesta del usuario: " + a);
  return true; // Permite que el formulario se envíe
}
let  a = ''; // Declaración de la variable "a"

let texto = document.querySelector("p").innerText = `Resultados de búsqueda para: ${a}`  


