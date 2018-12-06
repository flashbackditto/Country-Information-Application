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


var popButton = document.getElementById("clickMe").addEventListener('click', () => {
  removeLast();
  popGetThenSort();
});

function removeLast(e){

//Clear previously created elements to make room for new elements
 var myNode = document.getElementById("root");
  for (let i = myNode.childNodes.length - 1; i >= 0; i--) {
     myNode.removeChild(myNode.childNodes[i]);
  }
}



function popGetThenSort (e) {
var data = JSON.parse(request.response);


if (request.status >= 200 && request.status < 400) {  //optional if statement to console log if theres a 404 not found error or otherwise



  var byPop = data.slice(0);
  byPop.sort(function(a,b) {
      return a.population - b.population;
  });


  byPop.forEach( country => {

    //re-Creates Container thats removed by popButtonClick function
    const container = document.createElement('div');
    container.setAttribute('class','container');




    //Creates a div with a class of card
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

   //TODO insert card inside <a> tag to make card clickable
   //Makes card a link to reeant wiki page
    const a = document.createElement('a');
    a.setAttribute('target', '_"blank"');
    a.setAttribute('href', `https://en.wikipedia.org/wiki/${country.name}`);
    container.appendChild(a);
    a.appendChild(card);

    //creates an h1 set to the Countrys Name
    const h1 = document.createElement('h1');
    h1.textContent = country.name;


    //Creates an h3 set to capital Name
    const h3 = document.createElement('h3');

    if (country.capital === "") {
        h3.textContent = "No Capital";
    }else {
        h3.textContent = `Capital: ${country.capital}`;
   }


    //creates a paragraph and seets the text to population

    const p = document.createElement('p');
    country.population = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    p.textContent = `Population: ${country.population}`;

    const p2 = document.createElement('p');
    p2.textContent = `Currency: ${country.currencies[0].name}`;

    const p3 = document.createElement('p');

        if (country.area === null) {

        var countryNode = document.getElementById("root");
          p3.textContent = `Size: No size data available`;

         } else {
          country.area = country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        p3.textContent = `Size: ${country.area} sq kilometers`;
      }

    //re-appends container after removal
    app.appendChild(container);

    //appends the cards to the container element
    // container.appendChild(card);


    //each card will have an h1 and p

    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);


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
// var data = JSON.parse(this.response);


var sizeButton = document.getElementById("size").addEventListener('click', () => {
  removeLast();
  areaGetThenSort();
});


function areaGetThenSort (e) {
var data = JSON.parse(request.response);

if (request.status >= 200 && request.status < 400) {  //optional if statement to console log if theres a 404 not found error or otherwise

  var byArea = data.slice(0);
  byArea.sort(function(a,b) {
      return a.area - b.area;
  });


  byArea.forEach( country => {

    //re-Creates Container thats removed by popButtonClick function
    const container = document.createElement('div');
    container.setAttribute('class','container');

    //Creates a div with a class of card
    const card = document.createElement('div');
    card.setAttribute('class', 'card');


    //creates an h1 set to the Countrys Name
    const h1 = document.createElement('h1');
    h1.textContent = country.name;

    //Creates an h3 set to capital Name
    const h3 = document.createElement('h3');

    if (country.capital === "") {
        h3.textContent = "No Capital";
    }else {
        h3.textContent = `Capital: ${country.capital}`;
   }

    //creates a paragraph and seets the text to population

    const p = document.createElement('p');
    country.population = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    p.textContent = `Population: ${country.population}`;

    const p2 = document.createElement('p');
    p2.textContent = `Currency: ${country.currencies[0].name}`;

    const p3 = document.createElement('p');


   //START OF SIZE SORT ISSUES


    if (country.area === null) {
    var countryNode = document.getElementById("root");
      // while (countryNode.hasChildNodes()) {
      // countryNode.removeChild(countryNode.firstChild);
      p3.textContent = `Size: No size data available`;

      for (let i = countryNode.childNodes.length -1; i >= 0; i--) {
      countryNode.removeChild(countryNode.childNodes[i]);
    }

     } else {
      country.area = country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    p3.textContent = `Size: ${country.area} sq kilometers`;
  }

 //  document.getElementById('root').removeChild(document.getElementById('root').firstChild);



    //re-appends container after removal
    app.appendChild(container);

    //appends the cards to the container element
    container.appendChild(card);

    //each card will have an h1 and p
    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);



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


//document.getElementById('alphabetical').onclick = function () { //default data structure is Alphabetical

  var alphabeticalButton = document.getElementById("alphabetical").addEventListener('click', () => {
    removeLast();
    defaultSort();
  });

function defaultSort (e) {
//begin accessing JSON data here
var data = JSON.parse(request.response);

if (request.status >= 200 && request.status < 400) { //optional if statement to console log if theres a 404 not found error or otherwise
  data.forEach( country => {

 console.log(country.capital);


 //re-Creates Container thats removed by popButtonClick function
 const container = document.createElement('div');
 container.setAttribute('class','container');


    //Creates a div with a class of card
    const card = document.createElement('div');
    card.setAttribute('class', 'card');


    //creates an h1 set to the Countrys Name
    const h1 = document.createElement('h1');
    h1.textContent = country.name;

    //Creates an h3 set to capital Name
    const h3 = document.createElement('h3');

 if (country.capital === "") {
     h3.textContent = "No Capital";
 }else {
     h3.textContent = `Capital: ${country.capital}`;
}

    //creates a paragraph and seets the text to population
    const p = document.createElement('p');
    country.population = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    p.textContent = `Population: ${country.population}`;


    const p2 = document.createElement('p');
    p2.textContent = `Currency: ${country.currencies[0].name}`;

    const p3 = document.createElement('p');
    // country.area = country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //this reg ex is breaking the page resulting in alphaSort only getting to B, I think this may have to do with the decimals in area. it's also causing problems in popSort, however it dosen't seem to cause problems when inside an if statement.
    // p3.textContent = `Size: ${country.area} sq kilometers`;

    if (country.area === null) {

    var countryNode = document.getElementById("root");
      p3.textContent = `Size: No size data available`;

     } else {
      country.area = country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    p3.textContent = `Size: ${country.area} sq kilometers`;
  }



    //re-appends container after removal
    app.appendChild(container);

    //appends the cards to the container element
    container.appendChild(card);

    //each card will have an h1 and p
    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
  });
 } else {
  console.log('error');
 }
}

request.send();

//Problem to solve
//each time a button is clicked it adds the DOM elements to the page without refreshing
//the page and clearing away the previously creted DOM elements  SOLVED!

//got Population button to clear page, but unable to present new DOM elements, perhaps I need
//to change to event listeners, bubbling problem perhaps..? SOLVED!!

// Solved removal on click, example is in the popButton button funtions, just had to re-createElement after removal
// and re-appendChild to app.

//Next step is apply the fix to Alphabetical sort SOLVED!
// run tests, create third sorting function with new approach **SIZE SORT***NEEDS WORK

// and add a second api with functionality
