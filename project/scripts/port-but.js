import { portfolio } from "../data/portfolio.mjs";

// Dialog elements
const mydialog = document.querySelector("#mydialog");
const mytitle = mydialog.querySelector("h2");
const myinfo = mydialog.querySelector(".info");
const myclose = mydialog.querySelector("button");

// Close dialog
myclose.addEventListener("click", () => mydialog.close());

// Function to show portfolio item
function showPortfolio(businessName) {
    const item = portfolio.find(x => x.business_name === businessName);
    if (!item) return;

    mytitle.textContent = item.business_name;
    myinfo.innerHTML = `
        <p><strong>Business Need:</strong> ${item.business_need}</p>
        <p><strong>Package Used:</strong> ${item.package_used}</p>
        <p><strong>Description:</strong><br>${item.description}</p>
        <h3>Testimonial</h3>
        <p>"${item.testimonial}"</p>
        <p><strong>Address:</strong> ${item.address}</p>
    `;

    mydialog.showModal();
}

// Generate buttons for all portfolio items
const container = document.querySelector("#show-here");
portfolio.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent =  item.business_name ;
    btn.dataset.business = item.business_name;
    btn.addEventListener("click", () => showPortfolio(item.business_name));
    container.appendChild(btn);
});
