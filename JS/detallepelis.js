let qst = location.search;
let qstObj = new URLSearchParams(qst);
let resulBusqueda = qstObj.get("buscar");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5MWY4NDM4MGM1ZjNmMTliMjc0NDhhNWU2ZjFiMCIsInN1YiI6IjY1NGU0MjE4MjkzODM1NDNmNDg1OGIxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqMN7OL3YrQsOlckKOBcg4C39IECdKrLojZnfJxrVPw'
    }
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5MWY4NDM4MGM1ZjNmMTliMjc0NDhhNWU2ZjFiMCIsInN1YiI6IjY1NGU0MjE4MjkzODM1NDNmNDg1OGIxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqMN7OL3YrQsOlckKOBcg4C39IECdKrLojZnfJxrVPw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


  let mainCont= document.querySelector(".contenedor_g12");
  let recomendaciones= document.querySelector(".extras");
  fetch('https://api.themoviedb.org/3/movie/500?language=en-US', options)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    // ACA EL CODIGO
     console.log(data)
     let pelis = data
     let generos= ""
     for(let i=0; i<pelis.genres.length; i++){
      if(i < pelis.genres.length-1){
        generos += `<a href= "./detallegenero.html">${pelis.genres[i].name}</a>, `;
      }
      else{
        generos +=`<a href= "./detallegenero.html">${pelis.genres[i].name}</a>. `;
      };
      
     }
     let rating = Math.round(pelis.vote_average);
     let estrellas2="";
     for (let i = 0; i<rating; i++){
         estrellas2+="⭐";
     };
    


     mainCont.innerHTML+=` <div class="g_contenedor">
     <img src="${"https://" + "image.tmdb.org/t/p/w500" + pelis.poster_path}" alt="${pelis.original_title} class="gladiador_g">
     <h4 class="duracion">${pelis.runtime}min</h4>
     <div>
         <h2 class="titulo_g">${pelis.original_title}
         </h2>
     <h4 class="año">${pelis.release_date}
      </h4>
     </div>
  </div>
  
  <div class="g2_contenedor">
     <h3 class="titulo_g2">${generos}</h3>
     <h4 class="estrellas_g2">${estrellas2}</h4>
     <p class="p_g2">${pelis.overview}</p>`
  })
  .catch()













   
