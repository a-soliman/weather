const ui = new UI();

document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value.trim();
    const country = document.querySelector('#country').value.trim();
    
    if ( city == '' || country == '' ) {
        // DISPLAY VALIDATION ERROR
        
        return;
    }
    
});