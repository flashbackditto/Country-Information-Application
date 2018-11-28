// XMLHttpRequest is a widely supported built-in method of making requests.
// There is also a newer Fetch API which can be used for the same purpose,
// which is simpler but has less browser support.



// const app = document.getElementById('root');
// const world = document.getElementById('top');
// const logo = document.createElement('img');
//
// logo.src = 'img/logo.png';
//
//
// const container = document.createElement('div');
// container.setAttribute('class','container');
//
// world.appendChild(logo);
// app.appendChild(container);
//
// // creating a request variable and assigning a new XMLRequest object to it
// var request = new XMLHttpRequest ();
//
//
// //Open a new connection, using GET request on the URL endpoint
// request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
// // var data = JSON.parse(this.response);
//
//
// request.onload = function () {
//
// //begin accessing JSON data here
// var data = JSON.parse(this.response);
//
// if (request.status >= 200 && request.status < 400) { //optional if statement to console log if theres a 404 not found error or otherwise
//   data.forEach( country => {
//
//     //Creates a div with a class of card
//     const card = document.createElement('div');
//     card.setAttribute('class', 'card');
//
//
//     //creates an h1 set to the Countrys Name
//     const h1 = document.createElement('h1');
//     h1.textContent = country.name;
//
//     //creates a paragraph and seets the text to population
//     const p = document.createElement('p');
//     country.population = country.population;
//     p.textContent = `Population:${country.population}`;
//
//     //appends the cards to the container element
//     container.appendChild(card);
//
//     //each card will have an h1 and p
//     card.appendChild(h1);
//     card.appendChild(p);
//   });
//  } else {
//   console.log('error');
//  }
// }
//
// request.send();


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


document.getElementById("clickMe").onclick  = function () {


var data = JSON.parse(request.response);


if (request.status >= 200 && request.status < 400) {  //optional if statement to console log if theres a 404 not found error or otherwise

  var byPop = data.slice(0);
  byPop.sort(function(a,b) {
      return a.population - b.population;
  });


  byPop.forEach( country => {

    //Creates a div with a class of card
    const card = document.createElement('div');
    card.setAttribute('class', 'card');


    //creates an h1 set to the Countrys Name
    const h1 = document.createElement('h1');
    h1.textContent = country.name;

    //Creates an h3 set to capital Name
    const h3 = document.createElement('h3');
    h3.textContent = `Capital: ${country.capital}`;

    //creates a paragraph and seets the text to population

    const p = document.createElement('p');
    country.population = country.population;
    p.textContent = `Population: ${country.population}`;

    const p2 = document.createElement('p');
    p2.textContent = `Currency: ${country.currencies[0].name}`;

    //appends the cards to the container element
    container.appendChild(card);

    //each card will have an h1 and p
    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
  });
 } else {
  console.log('error');
}

}

request.send();


// creating a request variable and assigning a new XMLRequest object to it
var request = new XMLHttpRequest ();


//Open a new connection, using GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);


document.getElementById('alphabetical').onclick = function () { //default data structure is Alphabetical



//begin accessing JSON data here
var data = JSON.parse(request.response);

if (request.status >= 200 && request.status < 400) { //optional if statement to console log if theres a 404 not found error or otherwise
  data.forEach( country => {

 console.log(country.capital);



    //Creates a div with a class of card
    const card = document.createElement('div');
    card.setAttribute('class', 'card');


    //creates an h1 set to the Countrys Name
    const h1 = document.createElement('h1');
    h1.textContent = country.name;

    //Creates an h3 set to capital Name
    const h3 = document.createElement('h3');
    h3.textContent = `Capital: ${country.capital}`;

    //creates a paragraph and seets the text to population
    const p = document.createElement('p');
    country.population = country.population;
    p.textContent = `Population: ${country.population}`;

    const p2 = document.createElement('p');
    p2.textContent = `Currency: ${country.currencies[0].name}`;



    //appends the cards to the container element
    container.appendChild(card);

    //each card will have an h1 and p
    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
  });
 } else {
  console.log('error');
 }
}

request.send();

//Problem to solve
//each time a button is clicked it adds the DOM elements to the page without refreshing
//the page and clearing away the previously creted DOM elements
