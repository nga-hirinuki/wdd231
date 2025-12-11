const products = [
  { name: "Web Basic $199" },
  { name: "Web Standard $349" },
  { name: "Web Premium $599" },
  { name: "Design Basic $249" },
   { name: "Design Standard $449" },
  { name: "Design Premium $749" },
   { name: "Starter Combo $499" },
  { name: "Growth Combo $799" },
  { name: "All-In Combo $1299" },
];

document.addEventListener("DOMContentLoaded", function () {
  // Populate product <select>
  const select = document.querySelector('#product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });

  // Range slider logic
  const rangevalue = document.getElementById("rangevalue");
  const range = document.getElementById("r");

  if (range && rangevalue) {
    const displayRatingValue = () => {
      rangevalue.textContent = range.value;
    };
    range.addEventListener('change', displayRatingValue);
    range.addEventListener('input', displayRatingValue);
    displayRatingValue(); // initialize display
  }

  // Review count tracking
  let reviewCount = localStorage.getItem('reviewCount');
  reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
  localStorage.setItem('reviewCount', reviewCount);

  // Timestamp
  const timestampField = document.getElementById('form-timestamp');
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }
});
