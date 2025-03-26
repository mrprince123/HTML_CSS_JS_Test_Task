

console.log("Hi Welcome to Prince Code");

function selectOption(selectedElement, price) {
  // Deselect other options
  document.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("active");
  });

  // Activate selected option
  selectedElement.classList.add("active");

  // Update Total Price
  document.querySelector(
    ".total"
  ).textContent = `Total: $${price}.00 USD`;

  // Show Free Delivery message if price is 18 or more
  if (price >= 18) {
    document.querySelector(".free-delivery").style.display = "block";
  } else {
    document.querySelector(".free-delivery").style.display = "none";
  }
}