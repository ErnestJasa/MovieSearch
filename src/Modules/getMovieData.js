
function getMovieData(movieTitle, movieYear){
    const url = `http://www.omdbapi.com/?apikey=22174c4a&t=${movieTitle}&y=${movieYear}`

    return fetch(url)
        .then (response=> response.json())      
}

export default getMovieData