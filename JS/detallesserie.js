let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id")
let peliculas = [];
let url = `https://api.themoviedb.org/3/tv/${id}?language=es-AR`;
let urlRecomendaciones =`https://api.themoviedb.org/3/tv/${id}/recommendations`
let recomendaciones = []
let contRecom = document.querySelector(".recomendaciones")

http = "https://";
let contenedorPelisPrimero = document.querySelector(".contenedor");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWIxNmJlODMyNTZlNzlmODBjZDJiMzcyNjg4NmUxNiIsInN1YiI6IjY1NDUzMzM4NmJlYWVhMDEwYjMyNmU4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TWFgCaQuRoeFRaJ1NjUeJIef8ktIvl24agxdrMIOHWo'
    }
  };

fetch(url, options)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        peliculas = data
        estrellas = Math.round(peliculas.vote_average) 
        estrellas2 = ""
        for (let i = 0; i < estrellas; i++){
            estrellas2 += "⭐"
        }
        if (peliculas.tagline == ""){
          peliculas.tagline = "La serie no posee un slogan"
        }
        contenedorPelisPrimero.innerHTML += `<h2>Detalle de serie: ${peliculas.original_name}</h2> <p style = "font-size: 1.2em; font-family: 'Nunito Sans', sans-serif; text-align: center; line-height:0">"${peliculas.tagline}"<p> <section class="seriehouse"> <img src="${http + "image.tmdb.org/t/p/w500" + peliculas.poster_path}" alt="Doctor House"> <article class="detallesdehouse"> <p><span class="descripcion">Sinópsis:</span> ${peliculas.overview}</p> <p><span class="descripcion">Rating: </span> ${estrellas2}</p> <p><span class="descripcion">Duración:</span> ${peliculas.first_air_date} | ${peliculas.last_air_date}</p> <p><span class="descripcion">Trailer:</span></p> <div class="yt-video">  <iframe src="https://www.youtube.com/embed/64LGOCKxTdE?si=RPItN9HGCGPXeNFB&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> </article>`
    })
    .catch(function(error){
      console.log(error)
  });;

fetch(urlRecomendaciones, options)

  .then(function(response){
      return response.json()
  })

  .then(function(data){
      console.log(data)
      peliculas = data.results
      for (let i=0; i< 5; i++){
        contRecom.innerHTML += `<article class="media ${peliculas[i].id}"> <img src="${http + "image.tmdb.org/t/p/w500" + peliculas[i].poster_path}" alt="${peliculas[i].original_name}"> <p class="title">${peliculas[i].original_name}</p> <p class="mini">${peliculas[i].first_air_date}</p> <p class="mini">Rating: <span style= "color:${rating(Math.round(peliculas[i].vote_average))}; margin-left: 5px">${Math.round(peliculas[i].vote_average)}</span></p></article>`
      }
      
  })

  .catch(function(error){
    console.log(error)
});;

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
}