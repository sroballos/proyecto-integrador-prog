let qst = location.search;
let qstObj = new URLSearchParams(qst);
let resulBusqueda = qstObj.get("buscar");

let url=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=drama`;
let url = `https://api.themoviedb.org/3/movie/500?language=es-AR`;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5MWY4NDM4MGM1ZjNmMTliMjc0NDhhNWU2ZjFiMCIsInN1YiI6IjY1NGU0MjE4MjkzODM1NDNmNDg1OGIxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqMN7OL3YrQsOlckKOBcg4C39IECdKrLojZnfJxrVPw'
    }
  };
  
  

fetch(url, options)

    .then(function(response){
        return response.json();
    })

    .then(function(data){
        let generos=data 
        console.log(data)




    })



    .catch(function(error){
        console.log(error);
    });;