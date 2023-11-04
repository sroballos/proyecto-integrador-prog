let peliculas = []
let url = "https://api.themoviedb.org/3/tv/1408?language=en-US";

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
        contenedorPelisPrimero.innerHTML += `<h2>Detalle de serie: ${peliculas.original_name}</h2> <section class="seriehouse"> <img src="${http + "image.tmdb.org/t/p/w500" + peliculas.poster_path}" alt="Doctor House"> <article class="detallesdehouse"> <p><span class="descripcion">Sinópsis:</span> ${peliculas.overview}</p> <p><span class="descripcion">Rating: </span> ${estrellas2}</p> <p><span class="descripcion">Reseña:</span> 'House' introduce al personaje principal más electrizante de la televisión en años" (The Washington Post)</p> <p><span class="descripcion">Trailer:</span></p> <div class="yt-video">  <iframe src="https://www.youtube.com/embed/64LGOCKxTdE?si=RPItN9HGCGPXeNFB&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> </article>`
{/* */}
    });
