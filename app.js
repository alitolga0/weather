const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'c990bc5c65f86ac5fb4b1e31e3478436';

const setQuery =async (e) => {
  if (e.keyCode== '13') {
   await getResult(searchBar.value);
  }
}
const getResult = async(cityName) => {
    
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
  
 
  
  fetch(query)
  
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}`;

  let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description.toUpperCase();
 

  let minmax = document.querySelector('.minmax');

    minmax.innerText = `${Math.round(result.main.temp_min)} / ${Math.round(result.main.temp_max)}`;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);

