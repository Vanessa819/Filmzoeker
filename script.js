// movies database is in de file "movies.js"
function addMoviesToDom (movies) {
    const navigationList= document.getElementById("navigation-list");

    const listItems = movies.map((movie)=>{
        let listItem = document.createElement("li");

        let image = document.createElement("img");
        image.src = movie.Poster;

        let link = document.createElement("a");
        link.href ="https://www.imdb.com/title/"  + movie.imdbID;

        link.target = "_blank";

        listItem.appendChild(link);
        link.appendChild(image);

        return listItem;
 });
listItems.forEach((listItem) => {
    navigationList.appendChild(listItem);
});
}  

function removeMoviesFromDom(){
    const currentMovieList= document.getElementById("navigation-list");
    while( currentMovieList.hasChildNodes()){
        currentMovieList.removeChild(currentMovieList.firstChild);
        console.log("The current movie list is removed");
    };
}

function addEventListeners(){
    const radioButtons = document.getElementsByName("film-filter");

    radioButtons.forEach((radioButton)=>{
        radioButton.addEventListener("change", handleOnChangeEvent);
    });
}

function filterMoviesOnTitle(wordInMovieTitle){
    removeMoviesFromDom();
    const filterMovies = movies
    .filter((movie)=>{
        return movie.Title.includes(wordInMovieTitle);
    });

    addMoviesToDom(filterMovies);

    console.log("Laat de array zien", filterMovies);
    console.log(" hey ik ben een " , wordInMovieTitle, " film ");
}

function filterLatestMovies(){
    removeMoviesFromDom();

    const filterMoviesYear = movies
    .filter((movie)=> {
        return movie.Year >= 2014;
    });

    addMoviesToDom(filterMoviesYear);

    console.log("Movies from 2014 and beyond:", filterMoviesYear);

}

function handleOnChangeEvent(event){

    switch(event.target.value){
        case "latest movies":
            filterLatestMovies();
            break;
            case "avenger":
                filterMoviesOnTitle("Avenger");
                break;
                case "xmen":
                    filterMoviesOnTitle("X-Men");
                    break;
                    case "princess":
                        filterMoviesOnTitle("Princess");
                        break;
                        case "batman":
                        filterMoviesOnTitle("Batman");
                        break;
                        default:
                            console.log("kies je favoriete film");
                            break;

    }
}
addEventListeners();