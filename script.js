async function getWeather(){
    const apiKey = "7cb5106ea7cb7aa38d1bf4f33b92d95c";
    const Cityname = document.getElementById("city").value;
    if(!Cityname){
        alert("enter a city");
        return;
    }   
    try{
        const response=
        await fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${Cityname}&appid=${apiKey}&units=metric`);

        const data = await response.json();

        const city = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        let icon = ""
        if (description.includes("rain")) {
            icon = "/rainy.png";
        } else if (description.includes("thunderstorm")) {
            icon = "/thunder.png";
        } else if (description.includes("clear")) {
            icon = "/sunny.png";
        } else if (description.includes("snow")) {
            icon = "/snowy.png";
        } else if (description.includes("cloud")) {
            icon = "/cloudy.png";
        } else {
            icon = "/default.png"; 
        }
        

        document.getElementById("cityName").textContent = city;
        document.getElementById("temperature").textContent = `${temperature}°C`;
        document.getElementById("description").textContent = description;
        document.getElementById("weatherIcon").src = icon;
        weatherIcon.style.display="block";
        weatherIcon.style.width = "100px"
        weatherIcon.style.height = "100px";
        weatherIcon.style.marginLeft =" 120px";
        document.getElementById("weather-result").style.display = "block";
    }
    catch (error) {
        alert("Error fetching weather data!");
        console.error(error);
    }
}
