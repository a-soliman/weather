const ui = new UI();

document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value.trim();
    const country = document.querySelector('#country').value.trim();
    
    if ( city == '' || country == '' ) {
        // DISPLAY VALIDATION ERROR
        
        return;
    }
    const weather = new Weather(city, country);
    weather.getWeather()
        .then((data) => {
            if(!data) {
                // DISPLAY ERROR

            }
            else {
                ui.showWeather(data);
            }
        });
    
    // CLEAR THE INPUT FORM
    ui.clearInputs();

    // CLOSE THE MODAL
    ui.closeModal();
});