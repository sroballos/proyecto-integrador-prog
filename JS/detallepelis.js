const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5MWY4NDM4MGM1ZjNmMTliMjc0NDhhNWU2ZjFiMCIsInN1YiI6IjY1NGU0MjE4MjkzODM1NDNmNDg1OGIxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqMN7OL3YrQsOlckKOBcg4C39IECdKrLojZnfJxrVPw'
    }
  };


  let mainCont= document.querySelector(".contenedor_g12");
  
  fetch('https://api.themoviedb.org/3/movie/500?language=en-US', options)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    // ACA EL CODIGO
     console.log(data)
     let pelis = data
     let generos= []
     let generos = ""
        for (let i= 0; i<pelis.genres.length; i++){
          if (i < pelis.genres.length-1){
            generos += `<a href = "./detallegenero.html">${pelis.genres[i].name}</a>, `;
          }
          else{
            generos += `<a href = "./detallegenero.html">${pelis.genres[i].name}</a>.`;
          };
        }

    

     mainCont.innerHTML+=` <div class="g_contenedor">
     <img src="${"https://" + "image.tmdb.org/t/p/w500" + pelis.poster_path}" alt="${pelis.original_title} class="gladiador_g">
     <h4 class="duracion">2h 35m</h4>
     <div>
         <h2 class="titulo_g">${pelis.original_title}
         </h2>
     <h4 class="año">${pelis.release_date}
      </h4>
     </div>
  </div>
  
  <div class="g2_contenedor">
     <h3 class="titulo_g2">${generos}</h3>
     <h4 class="estrellas_g2">⭐⭐⭐⭐⭐</h4>
     <p class="p_g2">${pelis.overview}</p>
     <iframe class="trailer" width="500" height="300" src="https://www.youtube.com/embed/uvbavW31adA?si=d79XZbKHGOSUcqgy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
 
  })
  .catch()








   
