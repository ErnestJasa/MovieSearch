import ajaxService from "./ajaxService";
import getMovieData from './getMovieData';

let container = document.querySelector('.result');

 

const searchMovie = () =>{
    document.querySelector('form').addEventListener('submit', (event)=>{
        event.preventDefault();
        let searchTerm = document.querySelector('.term').value;
        console.log(searchTerm);
        let searchResponse;
        ajaxService(searchTerm)
            .then(result=>searchResponse=result)            
           // .then(()=>console.log(searchResponse.Search))
            .then(()=>{                
                    let hElement = document.createElement('h3');                   
                    hElement.innerHTML = "Pasirinkite filma"
                    container.appendChild(hElement)                  
                for(let i = 0; i < searchResponse.Search.length; i++){ 
                    let poster = document.createElement('img'); 
                    poster.src = searchResponse.Search[i].Poster;                                     
                    let movieDiv = document.createElement('div');
                    let movieH = document.createElement('h5');                    
                    movieDiv.className = `movie${i}`;
                    container.appendChild(movieDiv);                    
                    movieH.innerHTML = searchResponse.Search[i].Title + " " +searchResponse.Search[i].Year;
                    movieDiv.appendChild(movieH)                   
                }                            
        })
        .then(()=>{
            for(let i = 0; i <  searchResponse.Search.length; i++){                    
                     let plotP = document.createElement('p')                   
                document.querySelector(`.movie${i}`).addEventListener('click', ()=>{
                     const year = searchResponse.Search[i].Year;
                     const title = searchResponse.Search[i].Title;
                     let movieData;
                     let plot;
                     getMovieData(title, year)
                        .then(result=>movieData=result)
                        .then(()=>plot = movieData.Plot)
                        //.then(()=>console.log(plot))
                        .then(()=> {                            
                            plotP.innerHTML = `Movie plot: ${plot}`;
                            document.querySelector(`.movie${i}`).appendChild(plotP)
                        })               
                })
            } 
        })            
    }) 
}





export default searchMovie