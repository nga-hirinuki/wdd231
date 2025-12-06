import {places} from '../data/attractions.mjs'
console.log(places)

// ---- grab reference to the card from the places file

const showHere = document.querySelector("#allplaces")

function displayItems(places) {
    places.forEach(x => {
        //build card element
        const thecard = document.createElement('div')
        
        //photo
        const thephoto =document.createElement('img')
        thephoto.src = `images/${x.photo_link}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)
        
        //title
        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)
        
        //address
        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)
        
        //description
        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        thecard.appendChild(thedesc)

        showHere.appendChild(thecard)
    })// end loop
}// end function

//Start displaying all items in json file
displayItems(places)


//visits
 const messageEl = document.getElementById("message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
      // First visit
      messageEl.textContent = "Welcome! Let us know if you have any questions.";
  } else {
      const msPerDay = 1000 * 60 * 60 * 24;
      const daysBetween = Math.floor((now - lastVisit) / msPerDay);

      if (daysBetween < 1) {
          messageEl.textContent = "Back so soon! Awesome!";
      } else if (daysBetween === 1) {
          messageEl.textContent = "You last visited 1 day ago.";
      } else {
          messageEl.textContent = `You last visited ${daysBetween} days ago.`;
      }
  }

  // Store current visit time
  localStorage.setItem("lastVisit", now);