
let title = document.getElementById("title");
let poster = document.getElementById("poster");
let language = document.getElementById("language");
let ratings = document.getElementById("ratings");
let released = document.getElementById("released");
let genric = document.getElementById("genric");
let boxOffice = document.getElementById("BoxOffice");
let director = document.getElementById("director");
let awards = document.getElementById("awards");
let runtime = document.getElementById("runtime");
let imdbrating = document.getElementById("imdbrating");
let writer = document.getElementById("writer");
let actors = document.getElementById("actors");



let api = "https://www.omdbapi.com/?t=thor&apikey=e0ab358f";
function searchMovie(){
    let movieName = document.getElementById("movieName").value;
    let querry = "https://www.omdbapi.com/?t="+movieName+"&apikey=e0ab358f"
  
        fetch(querry).then((data) => {
            return data.json();
        }).then((data) =>{
            console.log(data);
            title.innerText = "Title  :"+"    "+ data.Title; 
            awards.innerText = "Awards  :"+"    "+ data.Awards;
            poster.src = data.Poster;
            language.innerText = "Language  :"+"    "+ data.Language; 
            ratings.innerText = "Ratings  :"+"    "+ data.Ratings[0].Value;
            released.innerText = "Released  :"+"    "+ data.Released;  
            genric.innerText = "Genric  :"+"    "+ data.Genre; 
            boxOffice.innerText = "BoxOddice  :"+"    "+ data.BoxOffice;
            director.innerText = "Director  :"+"    "+ data.Director;
            runtime.innerText = "Runtime  :"+"    "+ data.Runtime;
            imdbrating.innerText = "IMDBRAING  :"+"    "+ data.imdbRating;
            writer.innerText = "Writer  :"+"    "+ data.Writer;
            actors.innerText = "Actors  :"+"    "+ data.Actors;
        });
    
};