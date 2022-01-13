const displayWeatherContainer = document.getElementById(
  "displayWeatherContainer"
);
const getWeatherBtn = document.getElementById("getWeatherBtn");
const getCurrentLocationWeatherBtn = document.getElementById(
  "getCurrentLocationWeatherBtn"
);
let cityTextBox = document.getElementById("cityTextBox");

getWeatherBtn.addEventListener("click", function () {
  getWeatherInfo();
  
});

getCurrentLocationWeatherBtn.addEventListener("click", function () {
  const successCallback = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getCurrentLocationWeatherInfo(lat, lon);
  };
  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});

async function getCurrentLocationWeatherInfo(lat, lon) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1c26d27a99ea478d80b75628cf3d6f54`
  );
  let result = await response.json();
  console.log(result)

  return (displayWeatherContainer.innerHTML = `<h3>${result.name}<h3>
                                                <p>Current Temp: ${tempToF(result.main.temp)} °F</p>
                                                <p>Min Temp: ${tempToF(result.main.temp_min)} °F</p>
                                                <p>Max Temp: ${tempToF(result.main.temp_max)} °F</p>
                                                <p>Feels Like: ${tempToF(result.main.feels_like)} °F</p>
                                                <p>Pressure: ${result.main.pressure} "Hg</p>
                                                <p>Humidity: ${result.main.humidity} %</p>
                                                
    
    `);
}

async function getWeatherInfo() {
  let searchedCity = cityTextBox.value;

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=1c26d27a99ea478d80b75628cf3d6f54`
  );
  let result = await response.json();
  console.log(result);
  return displayWeatherContainer.innerHTML = `<h3>${result.name}<h3>
                                                <p>Current Temp: ${tempToF(result.main.temp)} °F</p>
                                                <p>Min Temp: ${tempToF(result.main.temp_min)} °F</p>
                                                <p>Max Temp: ${tempToF(result.main.temp_max)} °F</p>
                                                <p>Feels Like: ${tempToF(result.main.feels_like)} °F</p>
                                                <p>Pressure: ${result.main.pressure} "Hg</p>
                                                <p>Humidity: ${result.main.humidity} %</p>
                                                 
                                                
    
    `;
}

// button click to toggle display in F and C
/* <button onclick="displayDegreesC()">°C</button> */

function tempToF(kelvin) {

    return parseInt(((kelvin-273.15)*1.8)+32)

}