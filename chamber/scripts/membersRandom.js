// Step 1: Select the container
const cardsContainer = document.querySelector('#card');

// Step 2: Display function
const displayMembers = (membersArray) => {
    membersArray.forEach((member) => {
        // Create card container
        const card = document.createElement('section');
        card.classList.add('member-card', 'list'); // default to list layout

        // Image
        const portrait = document.createElement('img');
        portrait.src = member.imageUrl;
        portrait.alt = `${member.name} portrait`;

        // Membership level
        const membership = document.createElement('p');
        membership.textContent = member.membership_level;
        membership.classList.add('membership');

        // Name
        const fullName = document.createElement('h2');
        fullName.textContent = member.name;

        // Other info
        const info = document.createElement('p');
        info.innerHTML = `
            ${member.address}<br>
            ${member.phone}<br>
            <a href="${member.website}" target="_blank">${member.website}</a>
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
        console.log("Fetched data:", data);

        if (!data.members || !Array.isArray(data.members)) {
            console.error("No members array found in JSON");
            cardsContainer.textContent = "No members available.";
            return;
        }

        const filteredMembers = data.members.filter(member => 
            ["gold member", "silver member"].includes(member.membership_level.toLowerCase().trim())
        );

        if (filteredMembers.length === 0) {
            console.warn("No Gold or Silver members found");
            cardsContainer.textContent = "No Gold or Silver members available.";
            return;
        }

        const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
        const randomThree = shuffled.slice(0, 3);

        displayMembers(randomThree);
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
