import { courses } from '../data/courses.js'
console.log(courses)


const showHere = document.querySelector("#showHere")
const mydialog = document.querySelector("#mydialog")
const mytitle = document.querySelector("#mydialog h2")
const myclose = document.querySelector("#mydialog button")
const myinfo = document.querySelector("#mydialog p")
myclose.addEventListener("click", () => mydialog.close())

//--------------------------Loop Through the array of json items
function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src=`${url}${x.path}`
        photo.alt=x.name

        //Add a event listener to each division on the page.
        photo.addEventListener('click', () => showStuff(x));
        showHere.appendChild(photo)
    });//end loop
}//end function

// Start displaying all items in the json file
displayItems(temples)

// Populate the dialog with information when image is clicked
function showStuff(x) {
    mytitle.innerHTML = x.name;
    myinfo.innerHTML = `<p>Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}</p>`
    mydialog.showModal()
}
