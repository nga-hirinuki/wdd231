
//selec html elementsi in the document
const myTown = document.querySelector('#town');
const mydescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// Creat Required variables for the the url
const myKey ="af25351a77c8f835f56b53d4291c034b"
const myLat ="-36.84822117013703"
const myLong ="174.75197838358707"

//constructa full path using templat literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=kelvin`


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
        myTown.innerHTML = data.name
        mydescription.innerHTML = data.weather[0].description
        myTemperature.innerHTML = `${data.main.temp} &deg;C`
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        myGraphic.setAttribute('src', iconsrc);
        myGraphic.setAttribute('alt', data.weather[0].description);
    }        
        
    }
    apiFetch();
    
