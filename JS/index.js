let peliculas = [];

let url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

let urlTopSeries = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";

let urlFavoritasPelis = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"

http = "https://";
let contenedorPelisPrimero = document.querySelector(".contpelis2");
let contenedorSeriesPrimero = document.querySelector(".series");
let contenedorPelisFavs = document.querySelector(".favoritas")

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
    peliculas = data.results
    for(let i=0; i < 5; i++){
        contenedorPelisPrimero.innerHTML += `<article class="media ${peliculas[i].id}"> <img src="${http + "image.tmdb.org/t/p/w500" + peliculas[i].poster_path}" alt="${peliculas[i].original_title}"> <p class="title">${peliculas[i].original_title}</p> <p class="mini">${peliculas[i].release_date}</p> <p class="mini">Rating: <span style= "color:${rating(Math.round(peliculas[i].vote_average))}; margin-left: 5px">${Math.round(peliculas[i].vote_average)}</span></p></article>`
    }
    })

    .catch(function(error){
        console.log(error)
    });;

fetch(urlTopSeries, options)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
    peliculas = data.results
    for(let i=0; i < 5; i++){
        contenedorSeriesPrimero.innerHTML += `<a href = "./detallesserie.html?id=${peliculas[i].id}"><article class="media ${peliculas[i].id}"> <img src="${http + "image.tmdb.org/t/p/w500" + peliculas[i].poster_path}" alt=${peliculas[i].name}> <p class="title">${peliculas[i].name}</p> <p class="mini">${peliculas[i].first_air_date}</p> <p class="mini">Rating:     <span style="color:${rating(Math.round(peliculas[i].vote_average))}; margin-left: 5px">${Math.round(peliculas[i].vote_average)}</span></p> </article></a>`
    }
    })

    .catch(function(error){
        console.log(error)
    });;

fetch(urlFavoritasPelis, options)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
    peliculas = data.results
    for(let i=0; i < 5; i++){
        contenedorPelisFavs.innerHTML += `<article class="media ${peliculas[i].id}"> <img src="${http + "image.tmdb.org/t/p/w500" + peliculas[i].poster_path}" alt="${peliculas[i].original_title}"> <p class="title">${peliculas[i].original_title}</p> <p class="mini">${peliculas[i].release_date}</p> <p class="mini">Rating: <span style= "color:${rating(Math.round(peliculas[i].vote_average))}; margin-left: 5px">${Math.round(peliculas[i].vote_average)}</span></p></article>`
    }
    })

    .catch(function(error){
        console.log(error)
    });;


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