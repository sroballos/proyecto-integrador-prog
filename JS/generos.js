let urlPelis = "https://api.themoviedb.org/3/genre/movie/list?language=es"
let urlSeries = "https://api.themoviedb.org/3/genre/tv/list?language=es"
let peliculas = []
let pelisGenero = document.querySelector(".pelis") 
let seriesGenero = document.querySelector(".series") 

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWIxNmJlODMyNTZlNzlmODBjZDJiMzcyNjg4NmUxNiIsInN1YiI6IjY1NDUzMzM4NmJlYWVhMDEwYjMyNmU4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TWFgCaQuRoeFRaJ1NjUeJIef8ktIvl24agxdrMIOHWo'
    }
  };  

fetch(urlPelis, options)

.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
    peliculas = data.genres
    for (let i = 0; i < peliculas.length; i++){
        pelisGenero.innerHTML += `<a href="./detallegenero.html"><h3>${peliculas[i].name}</h3></a>`
    }
    
})
.catch(function(error){
    console.log(error)
});

fetch(urlSeries, options)

.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
    peliculas = data.genres
    for (let i = 0; i < peliculas.length; i++){
        seriesGenero.innerHTML += `<a href="./detallegenero.html"><h3>${peliculas[i].name}</h3></a>`
    }
    
})
.catch(function(error){
    console.log(error)
});;