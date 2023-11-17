
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTliN2EzYmFkNGJkNjAzZDc4MzdmYmZiZDU0NzExMyIsInN1YiI6IjY1NTI2ZjU3ZWE4NGM3MTA5NGZlYjBhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tTj2sgP2sxnhF1hIO1mv6rLXqUhxFQ_C-snrFDui8TM'
    }
  };
  let qst = location.search;
  let qstObj = new URLSearchParams(qst);
  let resulBusqueda = qstObj.get("buscar");
  
  
  let textoBusqueda = document.querySelector(".busq");
  textoBusqueda.innerText =  `Resultado de búsqueda: ${resulBusqueda}`;

  
  fetch('https://api.themoviedb.org/3/search/multi?query=breaking&include_adult=true&language=es-AR&page=1', options)
   .then(function(response){
    return response.json()
   })
   .then(function(data){
    console.log(data)
   
        for(let i=0; i < 3; i++){
           let a = fecha.innerText = data.results[i].release_date;
           console.log(a)
    }
    
   })
   .catch(function(error){
    console.log(error)
   });
   


   

function guardarRespuesta() {
  let campoBusqueda = document.getElementById("campoBusqueda");
  a = campoBusqueda.value; // Guarda el valor del campo de búsqueda en la variable "a"
  console.log("Respuesta del usuario: " + a);
  return true; // Permite que el formulario se envíe
}
let  a = ''; // Declaración de la variable "a"

let texto = document.querySelector("p").innerText = `Resultados de búsqueda para: ${a}`  
let descripcion = document.querySelector(".texto_busqueda").innerText = `jaja  ${datas.results[0].overview}`
