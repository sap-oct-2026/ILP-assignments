const products = [
  {
    id: 10,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 24.99,
    stock: {
      store: 12,
      warehouse: 35,
    },
    specs: {
      brand: "Logitech",
      color: "Black",
      warranty: 24,
    },
    tags: ["Wireless", "Ergonomic"],
    description: "Comfortable wireless mouse for everyday use.",
  },
  {
    id: 23,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 89.9,
    stock: {
      store: 4,
      warehouse: 10,
    },
    specs: {
      brand: "Keychron",
      color: "Gray",
      warranty: 24,
    },
    tags: ["Mechanical", "RGB", "USB-C"],
    description: "Mechanical keyboard with customizable lighting.",
  },
  {
    id: 24,
    name: "USB-C Hub",
    category: "Connectivity",
    price: 39.5,
    stock: {
      store: 0,
      warehouse: 0,
    },
    specs: {
      brand: "Anker",
      color: "Silver",
      warranty: 18,
    },
    tags: ["USB-C", "HDMI", "Portable"],
    description: "Compact adapter for connecting multiple devices.",
  },
  {
    id: 40,
    name: "27-inch Monitor",
    category: "Displays",
    price: 229.0,
    stock: {
      store: 3,
      warehouse: 7,
    },
    specs: {
      brand: "Dell",
      color: "Black",
      warranty: 36,
    },
    tags: ["4K", "IPS", "HDMI"],
    description: "High-resolution monitor ideal for studying and work.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 59.99,
    stock: {
      store: 6,
      warehouse: 15,
    },
    specs: {
      brand: "JBL",
      color: "Blue",
      warranty: 12,
    },
    tags: ["Bluetooth", "Portable", "Rechargeable"],
    description:
      "Portable speaker with clear sound and a rechargeable battery.",
  },
];

const productsBody = document.querySelector("#products-body");
const productCount = document.querySelector("#product-count");

productCount.textContent = `Total: ${products.length}`;

products.forEach((product, i) => {
  let availabilityText = "In Stock";
  if (product.stock.store + product.stock.warehouse <= 0) {
    availabilityText = "Out of stock";
  }

  productsBody.innerHTML += `<tr>
                            <td>${product.name}</td>
                            <td>${product.category}</td>
                            <td class="price-cell">${product.price.toFixed(2)} €</td>
                            <td>${availabilityText}</td>
                            <td><button data-index="${i}">Details</button></td>
                        </tr>`;
});

productsBody.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const index = event.target.dataset.index;
  const product = products[index];

  // Now I know exactly which product
  // was clicked and it is in the product variable
  console.log(product);
});
