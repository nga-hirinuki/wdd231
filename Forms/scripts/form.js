const products = [
    { name: "Flux Capacitor"},
    { name: "Power Laces"},
    { name: "Time Circuits"},
    { name: "Low Voltage Reactor"},
    { name: "Warp Equalizer"}
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
  
    // Range slider display logic
    const rangevalue = document.getElementById("rangevalue");
    const range = document.getElementById("r");
    if (range && rangevalue) {
      const displayRatingValue = () => {
        rangevalue.innerHTML = range.value;
      };
      range.addEventListener('change', displayRatingValue);
      range.addEventListener('input', displayRatingValue);
    }
  
    // Review count logic (stored but not displayed)
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);
  
    // Count is updated but not shown on the page
  });
   