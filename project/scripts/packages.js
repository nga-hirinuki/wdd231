import {packages} from '../data/packages.mjs'
console.log(packages)

// ---- grab reference to the card from the places file

const showHere = document.querySelector("#package")

function displayItems(packages) {
    packages.forEach(x => {
        //build card element
        const thecard = document.createElement('div')
        
        //title
        const thename = document.createElement('h2')
        thename.innerText = x.name
        thename.id = 'name';
        thecard.appendChild(thename)

         //monthly fees
        const thefees = document.createElement('h2')
        thefees.innerText = x.monthly_fee
        thefees.id = 'monthly-fee';
        thecard.appendChild(thefees)

         //web development
        const theweb = document.createElement('h4')
        theweb.innerText = x.web_development
        theweb.id ='web-development';
        thecard.appendChild(theweb)

         //design
        const thedesign = document.createElement('h4')
        thedesign.innerText = x.design
        thedesign.id = 'design';
        thecard.appendChild(thedesign)

         //includes
        const theincludes = document.createElement('p')
        theincludes.innerText = x.included
        theincludes.id = 'included';
        thecard.appendChild(theincludes)

         //not includes
        const thenotincl = document.createElement('p')
        thenotincl.innerText = x.not_included
        thenotincl.id = 'not-included';
        thecard.appendChild(thenotincl)
        

        showHere.appendChild(thecard)
    })// end loop
}// end function

//Start displaying all items in json file
displayItems(packages)




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