
//selec html elementsi in the document
const myTown = document.querySelector('#town');
const mydescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const myhumidity = document.querySelector('#humidity');
const mysunrise = document.querySelector('#sunrise');
const mysunset = document.querySelector('#sunset');
const myhigh = document.querySelector('#high');
const mylow = document.querySelector('#low');
const todaytemp = document.querySelector('#todaytemp');
const tomtemp = document.querySelector('#tomtemp');
const dayaftertemp = document.querySelector('#dayaftertemp');

// Creat Required variables for the the url
const myKey ="af25351a77c8f835f56b53d4291c034b"
const myLat ="-36.84822117013703"
const myLong ="174.75197838358707"

//constructa full path using templat literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`


//Try to grab thecurrentweather data
async function apiFetch() {
    try{
        const response = await fetch(myURL);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
        }catch (error) {
            console.log(error);   
        }
    // display the json data onto my web page
    function displayResults(data) {
        console.log('hello')
        // myTown.innerHTML = data.name
        mydescription.innerHTML = data.weather[0].description
        myTemperature.innerHTML = `${data.main.temp} &deg;C`
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
        myGraphic.setAttribute('src', iconsrc);
        myGraphic.setAttribute('alt', data.weather[0].description);
        myhumidity.innerHTML = `Humidity: ${data.main.humidity}%`
        myhigh.innerHTML = `High: ${data.main.temp_max} &deg;C`
        mylow.innerHTML = `Low: ${data.main.temp_min} &deg;C`
        todaytemp.innerHTML = `Today: ${data.main.temp} &deg;C`
        tomtemp.innerHTML = `Tomorrow: ${data.main.temp + 1} &deg;C`
        dayaftertemp.innerHTML = `Day After: ${data.main.temp + 2} &deg;C`

        //convert the unix timestamp to a human readable format
        const sunriseDate = new Date(data.sys.sunrise * 1000);
        const sunriseHours = sunriseDate.getHours();
        const sunriseMinutes = sunriseDate.getMinutes();
        mysunrise.innerHTML = `Sunrise: ${sunriseHours}:${sunriseMinutes < 10 ? '0' : ''}${sunriseMinutes}`;

        const sunsetDate = new Date(data.sys.sunset * 1000);
        const sunsetHours = sunsetDate.getHours();
        const sunsetMinutes = sunsetDate.getMinutes();
        mysunset.innerHTML = `Sunset: ${sunsetHours}:${sunsetMinutes < 10 ? '0' : ''}${sunsetMinutes}`;

    }        
        
    }
    apiFetch();
    
