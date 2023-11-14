const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjU5MWY4NDM4MGM1ZjNmMTliMjc0NDhhNWU2ZjFiMCIsInN1YiI6IjY1NGU0MjE4MjkzODM1NDNmNDg1OGIxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tqMN7OL3YrQsOlckKOBcg4C39IECdKrLojZnfJxrVPw'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/500?language=en-US', options)
  .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

let mainCont= document.querySelector(".contenedor_g12");

    mainCont.innerHTML=` <div class="g_contenedor">
    <img src="img/gladiador.jpg" alt="gladiator" class="gladiador_g">
    <h4 class="duracion">2h 35m</h4>
    <div>
        <h2 class="titulo_g">Gladiator</h2>
    <h4 class="año">(2000)</h4>
    </div>
 </div>
 
 <div class="g2_contenedor">
    <h3 class="titulo_g2">Accion/Aventura</h3>
    <h4 class="estrellas_g2">⭐⭐⭐⭐⭐</h4>
    <p class="p_g2">Máximo, general romano, desea volver a casa, pero el emperador Marco Aurelio quiere que herede el imperio. Esto hace que Cómodo ordene matar a su familia. Máximo escapa de la muerte y regresa a Roma como gladiador para vengar la muerte de su familia.</p>
    <iframe class="trailer" width="500" height="300" src="https://www.youtube.com/embed/uvbavW31adA?si=d79XZbKHGOSUcqgy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

    fetch