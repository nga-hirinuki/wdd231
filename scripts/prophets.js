// Step 1: Declare the URL and the container
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Step 2: Fetch the JSON data
async function getProphetData(url) {
    try {
        const response = await fetch(url);           // fetch the URL
        const data = await response.json();          // convert to JSON               
        displayProphets(data.prophets);             // pass the array to display function
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
// Call the function to fetch data
getProphetData(url);

// Step 3: Define the display function using an arrow function
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Populate the heading with full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append heading and image to the card section
        card.appendChild(fullName);
        card.appendChild(portrait);
        
        // Append the card to the container div
        cards.appendChild(card);
    });
};
