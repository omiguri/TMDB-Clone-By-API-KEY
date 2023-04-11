const form = document.querySelector("form");
const moviename = document.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault()
    fetch("https://api.themoviedb.org/3/search/movie?api_key=9600d9a3bcd52f86c4f65924813b03bb&language=en-US&query=" + moviename.value + "&page=1&include_adult=false")

        .then((Response) => { return Response.json() })
        .then((movie) => {
            console.log(movie);
            omi(movie.results)
        })

        // javascript
        
}

function omi(moviedata) {
    const resultsdiv = document.querySelector("#results");
    resultsdiv.innerHTML = "";

    moviedata.forEach((movie) => {
        const moviediv = document.createElement("div");
        moviediv.classList.add("movie");
        const poster = document.createElement("img");
        const title = document.createElement("h3");

        poster.src = (movie.poster_path) ? "https://image.tmdb.org/t/p/original" + movie.poster_path : "https://sd.keepcalms.com/i-w600/error-dp-is-not-loading.jpg";
        title.innerHTML = titlename(movie.original_title);





        moviediv.append(poster);
        moviediv.append(title);
        resultsdiv.append(moviediv)

    })
}

function titlename(name) {
    if (name.length > 20) {
        return name.slice(0, 20) + "..."
    }
    else {
        return name
    }
}