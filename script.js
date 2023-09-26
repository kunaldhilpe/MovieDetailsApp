let title = document.getElementById("title");
let poster = document.getElementById("poster");
let language = document.getElementById("language");
let ratings = document.getElementById("ratings");
let released = document.getElementById("released");
let generic = document.getElementById("genric"); 
let boxOffice = document.getElementById("BoxOffice");
let director = document.getElementById("director");
let awards = document.getElementById("awards");
let runtime = document.getElementById("runtime");
let imdbrating = document.getElementById("imdbrating");
let writer = document.getElementById("writer");
let actors = document.getElementById("actors");

function searchMovie() {
    let movieName = document.getElementById("movieName").value.trim();


    if (movieName === "") {
        title.innerText = "Please enter a movie name";
    } else {
        let query = "https://www.omdbapi.com/?t=" + movieName + "&apikey=e0ab358f";

        fetch(query)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
    
                console.log(data);
                title.innerText = "Title: " + data.Title;
                awards.innerText = "Awards: " + data.Awards;
                poster.src = data.Poster;
                language.innerText = "Language: " + data.Language;
                ratings.innerText = "Ratings: " + data.Ratings[0].Value;
                released.innerText = "Released: " + data.Released;
                generic.innerText = "Genre: " + data.Genre; 
                boxOffice.innerText = "Box Office: " + data.BoxOffice;
                director.innerText = "Director: " + data.Director;
                runtime.innerText = "Runtime: " + data.Runtime;
                imdbrating.innerText = "IMDB Rating: " + data.imdbRating;
                writer.innerText = "Writer: " + data.Writer;
                actors.innerText = "Actors: " + data.Actors;
            });
    }
}
