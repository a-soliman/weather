class Weather {
    constructor(city, country) {
        this.api_key = '37d499bd543bde314ffe9d6c454b5388';
        this.city = city;
        this.country = country;
    }

    getCityId() {
        return fetch('/city.list.json')
            .then((response) => response.json())
            .then((data) => {
                let city = data.filter((city) => {
                    return city.name.toLowerCase() == this.city.toLowerCase() && city.country.toLowerCase() == this.country.toLowerCase();
                })[0];
                
                if (city) {
                    return city.id;
                }
                return false;
            })
            .catch(err => err);
    }

    getWeather() {
        return this.getCityId()
            .then((city_id) => {
                if( city_id ) {
                    return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${city_id}&APPID=${this.api_key}`)
                        .then((response) => response.json())
                        .then((data) => {
                            return data;
                        })
                        .catch((err) => err);
                }
            });
    }
    
}

