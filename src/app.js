
import ajaxService from "./Modules/ajaxService"
import searchMovie from "./Modules/searchCode";

searchMovie();
ajaxService('lord of the rings');


function findMovies(){
    let searchTerm = document.querySelector('.term').value.trim();
    console.log(searchTerm)
}