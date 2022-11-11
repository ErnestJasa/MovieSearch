import ajaxService from "./ajaxService";
/*
const searchCode = () =>{
    document.querySelector('form').addEventListener('sumbit', (event)=>{
        event.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        console.log(searchTerm);
        let searchResponse;
        ajaxService(searchTerm)
            .then(result=>searchResponse=result)
            .then(()=>console.log(searchResponse))

    })
}
ajaxService('black panther')

export default searchCode*/

let container = document.querySelector('.container');

const searchMovie = () =>{
    document.querySelector('form').addEventListener('submit', (event)=>{
        event.preventDefault();
        let searchTerm = document.querySelector('.term').value;
        console.log(searchTerm);
        let searchResponse;
        ajaxService(searchTerm)
            .then(result=>searchResponse=result)            
           // .then(()=>console.log(searchResponse.Search))
            .then(()=>{let hElement = document.createElement('h3');
                    hElement.innerHTML = "Pasirinkite filma"
                    container.appendChild(hElement)
                for(let i = 0; i < searchResponse.Search.length; i++){
                    //document.querySelector(`.movie${i}`).remove
                    let movieDiv = document.createElement('div');
                    movieDiv.className = `movie${i}`;
                    movieDiv.innerHTML = searchResponse.Search[i].Title + " " +searchResponse.Search[i].Year;
                    container.appendChild(movieDiv);
                    console.log(searchResponse.Search[i].Title);
                }
        })
            
    }) 
}





export default searchMovie