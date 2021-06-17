const API_KEY = '92541404770d7115dd986f8d24422119';

function showMovies(){
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText); 
    for (i=0; i< dados.results.length; i++) {
        let filme = dados.results[i];
        let data = new Date (filme.release_date);

        texto = texto + `
            <div id="box-filme" style="background-color: lavender; padding: 10px; border-radius: 20px; border: 3px solid black;">
                <img class="img-preview" src="https://image.tmdb.org/t/p/w500${filme.backdrop_path}" alt="">
                <span class="titulo">${filme.title}<br></span>
                <span class="creditos1">Data: ${filme.release_date}</span> // <span class="creditos2"> Nota: ${filme.vote_average}<br></span> 
                <span class="text">
                    ${filme.overview}
                    <a style="color: white; background-color: darkblue; padding: 2px; border-radius: 7px;" href="https://themoviedb.org/movie/${filme.id}">Redirecionamento</a>
                </span>
            </div>
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
};

function getMovies(){
    let xhr = new XMLHttpRequest ();
    xhr.onload = showMovies;
    xhr.open('GET',`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    xhr.send ();
}

document.addEventListener('DOMContentLoaded', getMovies);