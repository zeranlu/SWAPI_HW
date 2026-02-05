(() => {

// connect to API and pull a list of 10 characters
// when user clicks, pull up a specific movie, include the title, poster image, and opening crawl.

// route 1: get character
// https://swapi.info/api/people/

// route 2: get a particular movie
// https://swapi.info/api/films/0

const characterBox = document.querySelector("#character-box");

const baseURL = `https://swapi.info/api/`
const charURL = `https://swapi.info/api/people/`;
const filmURL = `https://swapi.info/api/films/`;

const vaderID = '3';
const tarkinID = '11';
const jabbaID = '15';
const palpatineID = '19';
const bobaID = '20';
const nuteID = '31';
const maulID = '42';
const dookuID = '65';
const jangoID = '67';
const grievousID = '77';

    
    function getCharacters() {
        fetch(`${charURL}`)
        .then((res) => res.json())
        .then(characters => {
            
            const ul =  document.createElement("ul");

            console.log(characters[77].name);

            characters.forEach(character => {

                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = character.name;
                li.appendChild(a);
                ul.appendChild(li);
                
                // randomize the number that is picked
                // figure out the length of the array then pick a number within that range
                // console.log(character.films);

                // create a ul
                // create a li
                // create an a
                // add a data attribute to the anchor tag that contains a film 
            })
            characterBox.appendChild(ul);
        })
        .then(() => {
            //attach an event listener to each link, calls a new function that makes the second AJAX call
            // function name is getMovie();
        })
        .catch((error) => {
            console.error(error)
        })
    }

    function getMovie() {

        // need to extract data attribute either using event object or "this"
        fetch(`${filmURL}`)
        .then((res) => res.json())
        .then((movie) => {

            // console.log(`img.src="images/poster-${movie.episode_id}.jpg"`);
            // console.log(movie.title);
            // console.log(movie.opening_crawl);
        })
        .catch((error) => {
            console.error(error)
        })
    }
    
    getMovie();

    // Call the function to start
    getCharacters();

})();
