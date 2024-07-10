let weather = document.getElementById("weather");
let weather_card = document.getElementById("weather_card");
let loading_skeleton = document.getElementById("loading_skeleton");
let temp = document.getElementById("temp");
let Name = document.getElementById("name");
let weather_type = document.getElementById("weather_type");
let img_weather = document.getElementsByClassName("img_weather")[0];
let humidity = document.getElementById("humidity");
let wind = document.getElementById("Wind");
let search = document.getElementById("search");
let search_icon = document.getElementById("search_Icon");
let Message = document.getElementById("message");
let bottom = document.getElementById("bottom");
let weather_content = document.getElementById("weather_content");
let weather_type_img = document.getElementById("weather_type_img")
bottom.style.display = "none";
weather_type.style.display = "none";

async function fetchdata(city) {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7cfaae22d2ff44f638509451a8e96359`).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res);
        console.log(res.message);
        // Checking if city not found and displaying the message
        if (res.message) {
            Message.style.display = "block";
            bottom.style.display = "none";
            temp.style.display = "none";
            Name.style.display = "none";
            weather_type_img.style.display = "none";
            Message.innerText = res.message;
        }
        //  After data is retrived the city data
        if (res) {
            loading_skeleton.style.display = "none";
            weather_card.style.display = "block";
            weather_card.style.visibility = "visible";
            if (res.name) {
                Message.style.display = "none";
                bottom.style.display = "flex";
                temp.style.display = "block";
                Name.style.display = "block";
                weather_type_img.style.display = "block";
                weather_type.style.display = "flex";
                temp.innerText = res.main.temp.toFixed() + "°C";
                Name.innerText = res.name;
                humidity.innerText = res.main.humidity;
                wind.innerText = `${res.wind.speed}`;
                 if (res.weather[0].main == "Clouds") {
                    weather_type_img.src = "./images/cloud.png";
                } else if (res.weather[0].main == "Clear") {
                    weather_type_img.src = "./images/clear.png";
                } else if (res.weather[0].main == "Rain") {
                    weather_type_img.src = "./images/rain.png";
                } else if (res.weather[0].main == "Humidity") {
                    weather_type_img.src = "./images/humidity.png";
                } else if (res.weather[0].main == "Snow") {
                    weather_type_img.src = "./images/snow.png";
                } else if (res.weather[0].main == "Wind") {
                    weather_type_img.src = "./images/wind.png";
                } else if (res.weather[0].main == "Drizzle") {
                    weather_type_img.src = "./images/drizzle.png";
                } else if (res.weather[0].main == "Mist") {
                    weather_type_img.src = "./images/mist.png";
                }else{
                    weather_type_img.src = "./images/404.png";
                }
            }
        }
 }).catch((error) => {
    loading_skeleton.style.display = "none";
    Message.innerText = error;
    })
}
// Whenever user will click on search icon data be retrived
search_icon.addEventListener("click", () => {
    loading_skeleton.style.display = "block";
    weather_card.style.display = "none";
    if(Message.style.display = "block") Message.style.display = "none";
    fetchdata(search.value);
});





