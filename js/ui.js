class UI {
    constructor() {}

    showWeather(data) {
        console.log('Showing the weather');
        console.log(data);
        const location = `${data.city.name}, ${data.city.country}`;
        const temp = Math.floor(data.list["0"].main.temp - 273.15);
        const description = data.list["0"].weather["0"].description;
        const icon = `http://openweathermap.org/img/w/${data.list["0"].weather["0"].icon}.png`;
        const humidity = data.list["0"].main.humidity;
        const max = Math.floor(data.list["0"].main.temp_max - 273.15);
        const min = Math.floor(data.list["0"].main.temp_min - 273.15);
        const windSpeed = data.list["0"].wind.speed;

        const locationContainer = document.getElementById('w-location');
        const descriptionContainer = document.getElementById('w-desc');
        const tempContainer         = document.getElementById('w-string');
        const iconContainer = document.getElementById('w-icon');
        const humidityContainer = document.getElementById('w-humidity');
        const maxContainer = document.getElementById('w-max');
        const minContainer = document.getElementById('w-min');
        const windSpeedContainer = document.getElementById('w-wind');

        locationContainer.innerText     = location;
        descriptionContainer.innerText  = description;
        tempContainer.innerText         = 'Temprature: ' + temp;
        humidityContainer.innerText     = 'Humidity: ' +humidity;
        maxContainer.innerText          = 'Max: ' + max;
        minContainer.innerText          = 'Min: ' + min;
        windSpeedContainer.innerText    = 'Wind Speed: ' + windSpeed;
        



        iconContainer.setAttribute('src', icon);

    }

    clearInputs() {
        document.getElementById('city').value = '';
        document.getElementById('country').value = '';
    }

    closeModal() {
        document.getElementById('closeModal').click();
    }
}