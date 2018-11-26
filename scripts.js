// XMLHttpRequest is a widely supported built-in method of making requests.
// There is also a newer Fetch API which can be used for the same purpose,
// which is simpler but has less browser support.



const app = document.getElementById('root');
const world = document.getElementById('top');
const logo = document.createElement('img');

logo.src = 'img/logo.png';


const container = document.createElement('div');
container.setAttribute('class','container');

world.appendChild(logo);
app.appendChild(container);

// creating a request variable and assigning a new XMLRequest object to it
var request = new XMLHttpRequest ();


//Open a new connection, using GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// var data = JSON.parse(this.response);


/* request.onload = function () {

//begin accessing JSON data here
var data = JSON.parse(this.response);

if (request.status >= 200 && request.status < 400) { //optional if statement to console log if theres a 404 not found error or otherwise
  data.forEach( country => {

    //Creates a div with a class of card
    const card = document.createElement('div');
    card.setAttribute('class', 'card');


    //creates an h1 set to the Countrys Name
    const h1 = document.createElement('h1');
    h1.textContent = country.name;

    //creates a paragraph and seets the text to population
    const p = document.createElement('p');
    country.population = country.population;
    p.textContent = `Population:${country.population}`;

    //appends the cards to the container element
    container.appendChild(card);

    //each card will have an h1 and p
    card.appendChild(h1);
    card.appendChild(p);
  });
 } else {
  console.log('error');
 }
}

request.send(); */




document.getElementById("clickMe").onclick = function () {

//begin accessing JSON data here
var request = new XMLHttpRequest ();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

var data = JSON.parse(request.onload.response); // currently responding with null, nothing to parse?

if (request.status >= 200 && request.status < 400) { //optional if statement to console log if theres a 404 not found error or otherwise
  data.forEach( country => {

    //Creates a div with a class of card
    const card = document.createElement('div');
    card.setAttribute('class', 'card');


    //creates an h1 set to the Countrys Name
    const h1 = document.createElement('h1');
    h1.textContent = country.name;

    //creates a paragraph and seets the text to population
    const p = document.createElement('p');
    country.population = country.population;
    p.textContent = `Population:${country.population}`;

    //appends the cards to the container element
    container.appendChild(card);

    //each card will have an h1 and p
    card.appendChild(h1);
    card.appendChild(p);
  });
 } else {
  console.log('error');

}
}

request.send();
