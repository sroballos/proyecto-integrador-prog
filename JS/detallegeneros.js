let qst = location.search;
let qstObj = new URLSearchParams(qst);
let resulBusqueda = qstObj.get("buscar");


const options = {
    method: 'GET',
    headers: {
      acceptar: 'application/json',
      Authorization: 'Bearer 2f591f84380c5f3f19b27448a5e6f1b0'
    }
  };
  
  
  
  fetch(urlRecomendaciones, options)

  .then(function(response){
      return response.json();
  })

  .then(function(data){
      let peliculas = data.results;
      for (let i=0; i< 5; i++){
        contRecom.innerHTML += `<a href = "./detallespeli.html?id=${peliculas[i].id}"><article class="media ${peliculas[i].id}"> <img src="https://${"image.tmdb.org/t/p/w500" + peliculas[i].poster_path}" alt="${peliculas[i].original_title}"> <p class="title">${peliculas[i].original_title}</p> <p class="mini">${peliculas[i].release_date}</p> <p class="mini">Rating: <span style= "color:${rating(Math.round(peliculas[i].vote_average))}; margin-left: 5px">${Math.round(peliculas[i].vote_average)}</span></p></article></a>`;
      }
      
  })
  

