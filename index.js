const pageViews = [10000, 50000, 100000, 500000, 1000000];
const prices = [8.0, 12.0, 16.0, 24.0, 36.0];
const discount = 0.25;

const slider = document.querySelector(".slider-input");
const amount = document.querySelector(".amount");
const views = document.querySelector(".views");
const discountLabel = document.querySelector(".discount");
const monthlyToggle = document.getElementById("monthlyToggle");

function updatePrice() {
  const sliderValue = slider.value;
  const selectedPageViews = pageViews[sliderValue - 1];
  const selectedPrice = prices[sliderValue - 1];
  views.textContent = selectedPageViews.toLocaleString();

  if (monthlyToggle.checked) {
    const discountedPrice = selectedPrice * (1 - discount);
    amount.textContent = discountedPrice.toFixed(2);
  } else {
    amount.textContent = selectedPrice.toFixed(2);
  }
}

slider.addEventListener("input", updatePrice);
monthlyToggle.addEventListener("click", updatePrice);

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", resetEverything);

function resetEverything() {
  views.innerHTML = "0";
  amount.innerHTML = "0";
}
