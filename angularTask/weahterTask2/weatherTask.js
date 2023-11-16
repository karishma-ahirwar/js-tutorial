document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("cityInput").value;
    const fetchWeatherButton = document.getElementById("fetchWeather");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
    const city = document.getElementById("city");
    const errorElement = document.getElementById("error");

    const data = async function(){
        let getData = await fetch('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}')
    }
    fetchWeatherButton.addEventListener("click", function () {
        const cityName = cityInput.value.trim();
        if (cityName === "") {
            errorElement.textContent = "कृपया एक शहर का नाम दर्ज करें।";
            temperatureElement.textContent = "";
            descriptionElement.textContent = "";
            return;
        }

        // Replace 'YOUR_API_KEY' with your actual Weatherstack API key
        const apiKey = "YOUR_API_KEY";
        const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityName}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    errorElement.textContent = data.error.info;
                    temperatureElement.textContent = "";
                    descriptionElement.textContent = "";
                } else {
                    errorElement.textContent = "";
                    const temperature = data.current.temperature;
                    const description = data.current.weather_descriptions[0];
                    temperatureElement.textContent = `तापमान: ${temperature}°C`;
                    descriptionElement.textContent = `विवरण: ${description}`;
                }
            })
            .catch((error) => {
                errorElement.textContent = "मौसम डेटा प्राप्त करने में त्रुटि हुई। कृपया बाद में पुन: प्रयास करें।";
                temperatureElement.textContent = "";
                descriptionElement.textContent = "";
            });
    });
});
