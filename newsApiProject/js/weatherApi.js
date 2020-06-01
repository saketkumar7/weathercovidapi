async function getPlaces() {
  var input = document.getElementById("input");
  await new google.maps.places.Autocomplete(input);
}
let form = document.getElementById("input");
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  let searchKey = document.getElementById("input").value;
  console.log(searchKey);
  searchWeather(searchKey);
});
function searchWeather(searchKey) {
  let apiKey = "24578a57121f8edd9a8261e3679b7104";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=${apiKey}`;
  window
    .fetch(weatherUrl)
    .then((data) =>
      data
        .json()
        .then((weather) => {
          console.log(weather);
          let weatherData = weather.weather;
          let main = weather.main;
          let output = [];
          for (let x of weatherData) {
            output += `
              <div class="card-body">
                 <h1>${weather.name}</h1>
                 <div>
                    <p class="icon">
                    <img src="http://openweathermap.org/img/wn/${x.icon}.png"></p>
                    <p><span>temp:</span>
                    <span class="temp">${weather.main.temp}&deg;c</span></p>

                    <p class="float-left">humidity : ${weather.main.humidity}&deg</p>
                    <p class="des float-left"> ${x.description}</p>
                    <p class="des float-right">${x.main}</p>
                 </div>
              </div>
              `;
            document.getElementById("weatherTemplate").innerHTML = output;
          }
        })
        .catch((err) => console.log(err))
    )
    .catch((err) => console.log(err));
}
