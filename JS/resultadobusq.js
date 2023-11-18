
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
  
  let url = `https://api.themoviedb.org/3/search/multi?query=${resulBusqueda}&include_adult=true&language=es-AR&page=1`

  let textoBusqueda = document.querySelector(".busq");
  textoBusqueda.innerText =  `Resultado de búsqueda: ${resulBusqueda}`;
 
  let http = "https://";
  let contenedorPelisPrimero = document.querySelector(".contpelis2");
  let rating = function(id){
    if (id >=7){
        return "green"
    }
    else if (id > 5 && id < 7){
        return "yellow"
    }
    else{
        return "red"
    };
};
  
  fetch(url, options)
   .then(function(response){
    return response.json();
   })
   .then(function(data){
    console.log(data)
    let resultados = data.results;
    if (resulBusqueda.length === 0) {
      contenedorPelisPrimero.innerHTML = '<p>No hay resultado para su búsqueda</p>';
  } 
  else{
    for (let i = 0; i<3; i++){
      let api_id = resultados[i].id;
      let peli_titulo = resultados[i].title;
      let fecha = resultados[i].release_date;
      let imagen = resultados[i].poster_path;
      let resumen = resultados[i].overview
      contenedorPelisPrimero.innerHTML += `<article class="media ${api_id}"> <img src="${http + "image.tmdb.org/t/p/w500" + resultados[i].poster_path}" alt="${resultados[i].title}"> <p class="title">${peli_titulo}</p> <p class="mini">${fecha}</p> <p class="mini">Rating: <span style= "color:${rating(Math.round(resultados[i].vote_average))}; margin-left: 5px">${Math.round(resultados[i].vote_average)}</span></p></article>`;
  }

    
    }
      

    }
    )
    

    
    
      
           
    
   .catch(function(error){
    console.log(error)
   });
   
   
