console.log("products.js is loading");

import { db } from "./firebase.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

/*category*/
function getCategory(cat = "") {
  const c = cat.toLowerCase();

  if (["fashion", "clothing", "shirt", "hood"].some((k) => c.includes(k)))
    return "fashion";

  if (
    ["electronic", "electronics", "phone", "laptop", "tech"].some((k) =>
      c.includes(k),
    )
  )
    return "electronics";

  if (["beauty", "makeup", "skin", "cosmetic"].some((k) => c.includes(k)))
    return "beauty";

  return "fashion";
}

/* cart */
window.addToCart = function (id, name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ id, name, price, image });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("🛒 Added to cart");
};

/* producst */
window.viewProduct = function (id) {
  localStorage.setItem("productId", id);
  window.location.href = "product.html";
};

/* load products */
async function loadProducts() {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    if (snapshot.size === 0) {
      document.getElementById("fashion").innerHTML = "<p>No products found</p>";
      return;
    }

    snapshot.forEach((doc) => {
      const p = doc.data();

      const id = doc.id;
      const name = p.name || "No name";
      const price = p.price ?? 0;
      const image = p.image || "https://via.placeholder.com/150";
      const category = getCategory(p.category);

      const card = `
        <div class="product-card">

          <div onclick="viewProduct('${id}')" style="cursor:pointer;">
            <img src="${image}">
            <div class="product-name">${name}</div>
          </div>

          <div class="product-price">R ${price}</div>

          <button class="add-btn"
            onclick="addToCart('${id}', '${name}', ${price}, '${image}')">
            Add to Cart
          </button>

        </div>
      `;

      const section = document.getElementById(category);

      if (section) {
        section.insertAdjacentHTML("beforeend", card);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

loadProducts();
