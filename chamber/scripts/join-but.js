import { levels } from "./membership-levels.js";
// 01 call declare all my const for the dialog and close
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

myclose.addEventListener("click", () => mydialog.close());

//02 function to match subjects in the array 
function showLevel(subject) {
    const item = levels.find(x => x.subject === subject);

    if (!item) return;

    // 02 handle the description(benefits) setup as bullet points
    const desc = Array.isArray(item.description)
        ? item.description.join("<br>")
        : item.description;
    // 02a format my membership features
    mytitle.textContent = item.title;
    myinfo.innerHTML = `
        <p>${desc}</p>
        <h3>Benefits:</h3>
        <ul>${item.Benefits.map(b => `<li>${b}</li>`).join("")}</ul>
    `;
    mydialog.showModal();
}

// 03 Attach listeners to all membership buttons
["non-profit", "bronze", "silver", "gold"].forEach(id => {
    const btn = document.querySelector(`#${id}`);
    if (btn) {
        btn.addEventListener("click", () => showLevel(id));
    }
});
