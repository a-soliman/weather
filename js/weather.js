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

    
    
}

