const ApiUrl =" https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const ApiKey = "b9a699bd32b2a075aa727b266174d55d"

var serachBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");

async function getWeather(city){

    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`)
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}



searchBtn.addEventListener("click", ()=>{
   var city = serachBox.value
   getWeather(city);
   console.log("hfhfhyfyh")
})