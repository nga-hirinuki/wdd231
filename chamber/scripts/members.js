// Step 1: Select the container
const cardsContainer = document.querySelector('#card');

// Step 2: Display function
const displayMembers = (membersArray) => {
    membersArray.forEach((member) => {

        // Create card container
        const card = document.createElement('section');
        card.classList.add('member-card', 'list'); // default to list layout

        // Name
        const fullName = document.createElement('h2');
        fullName.textContent = member.name;

        // Image
        const portrait = document.createElement('img');
        portrait.src = member.imageUrl;
        portrait.alt = `${member.name} portrait`;

        // Membership level
        const membership = document.createElement('p');
        membership.textContent = member.membership_level;
        membership.classList.add('membership');

        // Other info
        const info = document.createElement('p');
        info.innerHTML = `
            ${member.address}<br>
            ${member.phone}<br>
            ${member.website}
        `;

        // Append elements to card
        card.appendChild(portrait);
        card.appendChild(fullName);
        card.appendChild(membership);
        card.appendChild(info);

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

// Step 4: Layout toggle buttons
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    cardsContainer.classList.add("grid-view");
    cardsContainer.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    cardsContainer.classList.add("list-view");
    cardsContainer.classList.remove("grid-view");
});

// Step 5: Fetch JSON
getMembersData('data/members.json'); // adjust path as needed
