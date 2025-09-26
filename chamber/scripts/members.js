// Step 1: Select the container
const cardsContainer = document.querySelector('#card');

// Step 2: Display function
const displayMembers = (membersArray) => {
    membersArray.forEach((member) => {
        // Create card container
        const card = document.createElement('section');
        card.classList.add('member-card'); // optional CSS class

        // Create and populate image
        const portrait = document.createElement('img');
        portrait.src = member.imageUrl;
        portrait.alt = `${member.name} portrait`;
        portrait.width = 150;
        portrait.height = 150;

        
        // Create a wrapper div for text info
        const infoWrapper = document.createElement('div');
        infoWrapper.classList.add('member-info');

         // Create a wrapper div for text info
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-info');
        
        
        // Create and populate name
        const fullName = document.createElement('h2');
        fullName.textContent = member.name;

        const description = document.createElement('p');
        description.textContent = member.description;

        const info = document.createElement('p');
        info.innerHTML = `
            Address: ${member.address}<br>
            Phone: ${member.phone}<br>
            Email: ${member.email}<br>
            Website: ${member.website} <br>
        `;

        // Create and populate name
        const membership = document.createElement('p');
        membership.textContent = member.membership_level;

       // Append text elements to the wrapper
        infoWrapper.appendChild(fullName);
        infoWrapper.appendChild(description);
        infoWrapper.appendChild(info);
         
        imageWrapper.appendChild(portrait);
        imageWrapper.appendChild(membership);
        
        // Add wrapper + image to the card
        card.appendChild(imageWrapper);
        card.appendChild(infoWrapper);
         

        // Append card to container
        cardsContainer.appendChild(card);
    });
};

// Step 3: Fetch JSON data
const getMembersData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Fetch error:", error);
        cardsContainer.textContent = "Failed to load members.";
    }
};

// Step 4: Correct path to JSON relative to directory.html
getMembersData('data/members.json');  // JSON at chamber/data/members.json
