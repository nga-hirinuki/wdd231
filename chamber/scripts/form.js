const products = [
  { name: "Non profit Membership Level" },
  { name: "Bronze Membership Level" },
  { name: "Silver Membership Level" },
  { name: "Gold Membership Level" },
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
