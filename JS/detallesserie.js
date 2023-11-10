let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
let peliculas = [];
if (id == null){
  id = "1408"
}

let url = `https://api.themoviedb.org/3/tv/${id}?language=es-AR`;
let urlRecomendaciones =`https://api.themoviedb.org/3/tv/${id}/recommendations`;
let urlReviews = `https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&page=1`

let recomendaciones = [];
let contRecom = document.querySelector(".recomendaciones");
let contenedorPelisPrimero = document.querySelector(".contenedor");
let verRecomendaciones = document.querySelector("#verRec")

let review = []

//Revisar esta función, ver si se puede optimizar para no tener que utilizarla. ML
let rating = function(id){
  if (id >=7){
      return "green"
  }
  else if (id > 5 && id < 7){
      return "yellow"
  }
  else{
      return "red"
  }
};


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWIxNmJlODMyNTZlNzlmODBjZDJiMzcyNjg4NmUxNiIsInN1YiI6IjY1NDUzMzM4NmJlYWVhMDEwYjMyNmU4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TWFgCaQuRoeFRaJ1NjUeJIef8ktIvl24agxdrMIOHWo'
    }
  };

fetch(url, options)

    .then(function(response){
        return response.json();
    })

    .then(function(data){
        let peliculas = data;
        let rating = Math.round(peliculas.vote_average);
        let estrellas2 = "";
        for (let i = 0; i < rating; i++){
            estrellas2 += "⭐";
        };

        let generos = ""
        for (let i= 0; i<peliculas.genres.length; i++){
          if (i < peliculas.genres.length-1){
            generos += `<a href = "./detallegenero.html">${peliculas.genres[i].name}</a>, `;
          }
          else{
            generos += `<a href = "./detallegenero.html">${peliculas.genres[i].name}</a>.`;
          };
        }


      fetch(urlReviews, options)

        .then(function(response){
          return response.json()
        })

        .then(function(data){
          review = data.results[0];
          if (review == undefined){
            review = {
              content: "No se encontraron reviews para esta serie :(.",
              author: "Null",
              author_details: {
                rating: "Null"
              }
            };
          }
          if (peliculas.tagline == ""){
            peliculas.tagline = "La serie no posee un slogan";
          };

          contenedorPelisPrimero.innerHTML += `<h2>Detalle de serie: ${peliculas.original_name}</h2> <p style = "font-size: 1.2em; font-family: 'Nunito Sans', sans-serif; text-align: center; line-height:0">"${peliculas.tagline}"<p> <section class="seriehouse"> <img src="http://${"image.tmdb.org/t/p/w500" + peliculas.poster_path}" alt="Doctor House"> <article class="detallesdehouse"> <p><span class="descripcion">Sinópsis:</span> ${peliculas.overview}</p> <p><span class="descripcion">Rating: </span> ${estrellas2}</p> <p><span class="descripcion">Duración:</span> ${peliculas.first_air_date} | ${peliculas.last_air_date}</p><p><span class="descripcion">Géneros:</span> ${generos}</p>
          <p><span class="descripcion">Review:</span> ${review.content}</p> <p>Usuario: ${review.author} | Rating: ${review.author_details.rating}<p></article>`;
          console.log(review)
        });
      
    })
    .catch(function(error){
      console.log(error);
  });

fetch(urlRecomendaciones, options)

  .then(function(response){
      return response.json();
  })

  .then(function(data){
      let peliculas = data.results;
      for (let i=0; i< 5; i++){
        contRecom.innerHTML += `<a href = "./detallesserie.html?id=${peliculas[i].id}"><article class="media ${peliculas[i].id}"> <img src="https://${"image.tmdb.org/t/p/w500" + peliculas[i].poster_path}" alt="${peliculas[i].original_name}"> <p class="title">${peliculas[i].original_name}</p> <p class="mini">${peliculas[i].first_air_date}</p> <p class="mini">Rating: <span style= "color:${rating(Math.round(peliculas[i].vote_average))}; margin-left: 5px">${Math.round(peliculas[i].vote_average)}</span></p></article></a>`;
      }
      
  })

  .catch(function(error){
    console.log(error);
});;

verRecomendaciones.addEventListener("click",function(){
  contRecom.style.display = "flex"
})