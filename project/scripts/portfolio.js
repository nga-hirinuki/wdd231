import {portfolio} from '../data/portfolio.mjs'
console.log(portfolio)

// ---- grab reference to the card from the places file

const showHere = document.querySelector("#portfolio")

function displayItems(portfolio) {
    portfolio.forEach(x => {
        //build card element
        const thecard = document.createElement('div')
        
        //bus name
        const thename = document.createElement('h2')
        thename.innerText = x.business_name
        thename.id = 'business_name';
        thecard.appendChild(thename)

         //owner
        const theowner = document.createElement('h4')
        theowner.innerText = x.owner
        theowner.id = 'owner';
        thecard.appendChild(theowner)

         //address
        const theaddress = document.createElement('h6')
        theaddress.innerText = x.address
        theaddress.id = 'address';
        thecard.appendChild(theaddress)

         //description
        const thepackage = document.createElement('h3')
        thepackage.innerText = x.package_used
        thepackage.id = 'package';
        thecard.appendChild(thepackage)   
        
           //includes
        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        thedesc.id = 'description';
        thecard.appendChild(thedesc)   
           
        //includes
        const theneeds = document.createElement('p')
        theneeds.innerText = x.business_need
        theneeds.id = 'business_need';
        thecard.appendChild(theneeds)   

           //includes
        const thetest = document.createElement('p')
        thetest.innerText = x.testimonial
        thetest.id = 'testimonial';
        thecard.appendChild(thetest)   

        showHere.appendChild(thecard)
    })// end loop
}// end function

//Start displaying all items in json file
displayItems(portfolio)




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