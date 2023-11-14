const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5MWY4NDM4MGM1ZjNmMTliMjc0NDhhNWU2ZjFiMCIsInN1YiI6IjY1NGU0MjE4MjkzODM1NDNmNDg1OGIxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqMN7OL3YrQsOlckKOBcg4C39IECdKrLojZnfJxrVPw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


let mainCont= document.querySelector(".contenedor_g12");

    mainCont.innerHTML='<h1>hola</h1>'
    