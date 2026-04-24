console.log("checkout.js loaded");

const itemsContainer = document.getElementById("checkout-items");
const productsTotalEl = document.getElementById("products-total");
const finalTotalEl = document.getElementById("final-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCheckout() {
  itemsContainer.innerHTML = "";

  if (cart.length === 0) {
    itemsContainer.innerHTML = "<p>Your cart is empty</p>";
    productsTotalEl.textContent = "R 0";
    finalTotalEl.textContent = "R 0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const itemHTML = `
      <div class="checkout-item">
        <img src="${item.image}">
        
        <div class="item-info">
          <h4>${item.name}</h4>
          <p>R ${item.price}</p>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">
          ✕
        </button>
      </div>
    `;

    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
  });

  productsTotalEl.textContent = "R " + total;
  finalTotalEl.textContent = "R " + total;
}

window.removeItem = function (index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCheckout();
};

document.getElementById("payment-form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  alert("Payment successful!");

  localStorage.removeItem("cart");
  window.location.href = "products.html";
});

renderCheckout();
