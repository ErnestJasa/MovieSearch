
const ajaxService = (term) =>{
    const url = `http://www.omdbapi.com/?s=${term}&apikey=22174c4a&plot=full`

    return fetch(url)
        .then(response => response.json())
        
}

export default ajaxService