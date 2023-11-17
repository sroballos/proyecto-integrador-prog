let qst = location.search;
let qstObj = new URLSearchParams(qst);
let resulBusqueda = qstObj.get("buscar");

let url=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=drama', options)`


fetch(url, options)

    .then(function(response){
        return response.json();
    })

    .then(function(data){
        let generos=data 
        console.log(generos)




        return
    })



    .catch(function(error){
        console.log(error);