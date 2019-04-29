
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

   //Makes card a link to relevant wiki page
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

    //making sorted element stand out
    p.setAttribute("style", "color: #e20b0b; text-decoration: underline;");

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

    const p4 = document.createElement('p');
    const p5 = document.createElement('p');

    var weatherRequest = new XMLHttpRequest();

    const API_KEY = "7557d9cd391404e409ff6415e3d53dceDISABLE";
    weatherRequest.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.name}&appid=${API_KEY}&units=imperial` , true);


    weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.response);

  //works great for all but 11 countries, API lacks data for them. If statement below
  // solves the issue for those 11.
   if (weatherRequest.status === 404 ) {

     p4.textContent = `Temperature at capital: No Data Available`;
     p5.textContent = `Weather Conditons: No Data Available `;
   } else {
    p4.textContent = `Temperature at Capital: ${weatherData.main.temp}F`;
    p5.textContent = `Weather Conditions: ${weatherData.weather[0].description}`;
  }
 }

    weatherRequest.send ();

    //re-appends container after removal
    app.appendChild(container);

    //each card will have an h1 and p

    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);

  });
 } else {
  console.log('error');
  }
}

request.send();


//Open a new connection, using GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

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

      for (let i = countryNode.childNodes.length -1; i >= 0; i--) {
      countryNode.removeChild(countryNode.childNodes[i]);
    }

     } else {
      country.area = country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    p3.textContent = `Size: ${country.area} sq kilometers`;
  }

  //making sorted element stand out
  p3.setAttribute("style", "color: #e20b0b; text-decoration: underline;");


      const p4 = document.createElement('p');
      const p5 = document.createElement('p');

      var weatherRequest = new XMLHttpRequest();

      const API_KEY = "7557d9cd391404e409ff6415e3d53dceDISABLE";
      weatherRequest.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.name}&appid=${API_KEY}&units=imperial` , true);

      weatherRequest.onload = function () {
      var weatherData = JSON.parse(weatherRequest.response);

    //works great for all but 11 countries, API lacks data for them. If statement below
    // solves the issue for those 11.
     if (weatherRequest.status === 404 ) {

       p4.textContent = `Temperature at capital: No Data Available`;
       p5.textContent = `Weather Conditons: No Data Available `;
     } else {
      p4.textContent = `Temperature at Capital: ${weatherData.main.temp}F`;
      p5.textContent = `Weather Conditions: ${weatherData.weather[0].description}`;
    }
   }

      weatherRequest.send ();

    //re-appends container after removal
    app.appendChild(container);

    //each card will have an h1 and p
    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);

  });
 } else {
  console.log('error');
  }
}

request.send();

//Open a new connection, using GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

  var alphabeticalButton = document.getElementById("alphabetical").addEventListener('click', () => {
    removeLast();
    defaultSort();
  });

function defaultSort (e) {
//begin accessing JSON data here
var data = JSON.parse(request.response);

if (request.status >= 200 && request.status < 400) { //optional if statement to console log if theres a 404 not found error or otherwise
  data.forEach( country => {

 //re-Creates Container thats removed by popButtonClick function
 const container = document.createElement('div');
 container.setAttribute('class','container');

    //Creates a div with a class of card
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

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

      const p4 = document.createElement('p');
      const p5 = document.createElement('p');

      var weatherRequest = new XMLHttpRequest();

      const API_KEY = "7557d9cd391404e409ff6415e3d53dceDISABLE";
      weatherRequest.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.name}&appid=${API_KEY}&units=imperial` , true);

      weatherRequest.onload = function () {
      var weatherData = JSON.parse(weatherRequest.response);

    //works great for all but 11 countries, API lacks data for them. If statement below
    // solves the issue for those 11.
     if (weatherRequest.status === 404 ) {

       p4.textContent = `Temperature at capital: No Data Available`;
       p5.textContent = `Weather Conditons: No Data Available `;
     } else {
      p4.textContent = `Temperature at Capital: ${weatherData.main.temp}F`;
      p5.textContent = `Weather Conditions: ${weatherData.weather[0].description}`;
    }
   }

      weatherRequest.send ();

    //re-appends container after removal
    app.appendChild(container);

    //each card will have an h1 and p
    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
  });
 } else {
  console.log('error');
 }
}

request.send();


var request = new XMLHttpRequest ();

//Open a new connection, using GET request on the URL endpoint
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

const searchBar = document.forms['searchCountries'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  removeLast();

//begin accessing JSON data here
var data = JSON.parse(request.response);

if (request.status >= 200 && request.status < 400) { //optional if statement to console log if theres a 404 not found error or otherwise

  data.forEach( country => {

    //creates an h1 set to the Countrys Name
    const h1 = document.createElement('h1');
    h1.textContent = country.name;

    //re-Creates Container thats removed by popButtonClick function
    const container = document.createElement('div');
    container.setAttribute('class','container');

       //Creates a div with a class of card
       const card = document.createElement('div');
       card.setAttribute('class', 'card');

       const a = document.createElement('a');
       a.setAttribute('target', '_"blank"');
       a.setAttribute('href', `https://en.wikipedia.org/wiki/${country.name}`);
       container.appendChild(a);
       a.appendChild(card);

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

      const p4 = document.createElement('p');
      const p5 = document.createElement('p');

      var weatherRequest = new XMLHttpRequest();

      const API_KEY = "7557d9cd391404e409ff6415e3d53dceDISABLE";
      weatherRequest.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.name}&appid=${API_KEY}&units=imperial` , true);

      weatherRequest.onload = function () {
      var weatherData = JSON.parse(weatherRequest.response);

    //works great for all but 11 countries, API lacks data for them. If statement below
    // solves the issue for those 11.
     if (weatherRequest.status === 404 ) {

       p4.textContent = `Temperature at capital: No Data Available`;
       p5.textContent = `Weather Conditons: No Data Available `;
     } else {
      p4.textContent = `Temperature at Capital: ${weatherData.main.temp}F`;
      p5.textContent = `Weather Conditions: ${weatherData.weather[0].description}`;
    }
   }

      weatherRequest.send ();

    //re-appends container after removal
    app.appendChild(container);

    //each card will have an h1 and p
    card.appendChild(h1);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);

    const term = e.target.value.toLowerCase();
    const countrySelector = document.querySelector('#root .card'); //this might not be selecting the container properly
    const countries = countrySelector.getElementsByTagName('h1');
    Array.from(countries).forEach(function(country){
      const name = card.firstElementChild.textContent;

      if(name.toLowerCase().indexOf(term) != -1) {
        container.style.display = 'flex';
      } else {
         container.style.display = 'none';
      }
    })

  });
 } else {
  console.log('error');
 }

});

request.send();
