import ajaxService from "./ajaxService";


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
                if(!document.querySelector('.Pasirinkti')){
                    let hElement = document.createElement('h3');
                    hElement.className = "Pasirinkti"
                   // hElement.innerHTML = "Pasirinkite filma"
                    container.appendChild(hElement)                  
                for(let i = 0; i < searchResponse.Search.length; i++){ 
                    let poster = document.createElement('img'); 
                    poster.src = searchResponse.Search[i].Poster;                                     
                    let movieDiv = document.createElement('div');
                    movieDiv.className = `movie${i}`;
                    container.appendChild(movieDiv);                    
                    movieDiv.innerHTML = searchResponse.Search[i].Title + " " +searchResponse.Search[i].Year;
                    //movieDiv.appendChild(poster);              
                    //console.log(searchResponse.Search[i]);
                    
                }                              
                }               
        })
        .then(()=>{
            for(let i = 0; i <  searchResponse.Search.length; i++){
                document.querySelector(`.movie${i}`).addEventListener('click', ()=>{
                    const year = searchResponse.Search[i].Year;
                    const title = searchResponse.Search[i].Title;
                    const url = `http://www.omdbapi.com/?apikey=22174c4a&t=${title}&y=${year}`
                    console.log(url);
                    
                })
            } 
        })
            
    }) 
}





export default searchMovie