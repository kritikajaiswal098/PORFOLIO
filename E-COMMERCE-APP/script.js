let total = 0;
const totalSpan = document.getElementById("total");
const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let price = parseFloat(btn.getAttribute("data-price"));
    total += price;
    totalSpan.textContent = total.toFixed(2);
    btn.textContent = "Added ✅";
    setTimeout(() => btn.textContent = "Add to Cart", 1000);
  });
});
