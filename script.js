const products = [
  {
    id: 1,
    name: "Men Jacket",
    price: 1499,
    category: "fashion",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Wireless Headphone",
    price: 2499,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1999,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 2999,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Women Dress",
    price: 1799,
    category: "fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Casual Sneakers",
    price: 1599,
    category: "shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80"
  }
];

let cart = [];

const productBox = document.getElementById("productBox");
const cartItems = document.getElementById("cartItems");
const total = document.getElementById("total");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

function showProducts(list) {
  productBox.innerHTML = "";

  list.forEach(product => {
    productBox.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <div class="card-content">
          <h3>${product.name}</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p class="price">₹${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

function filterProducts(category) {
  if (category === "all") {
    showProducts(products);
  } else {
    const filtered = products.filter(product => product.category === category);
    showProducts(filtered);
  }
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach((item, index) => {
    sum += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - ₹${item.price}</span>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  total.innerText = sum;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function subscribe() {
  const email = document.getElementById("email").value;

  if (email === "") {
    alert("Please enter your email");
  } else {
    alert("Thank you for subscribing: " + email);
    document.getElementById("email").value = "";
  }
}

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

showProducts(products);
