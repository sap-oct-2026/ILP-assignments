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
const detailsPanel = document.querySelector("#details-panel");
const detailsContent = document.querySelector("#details-content");
const closeButton = document.querySelector("#close-button");
const productForm = document.querySelector("#product-form");

function renderList() {
  productCount.textContent = `Total: ${products.length}`;

  productsBody.innerHTML = "";
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
}

renderList();

closeButton.addEventListener("click", () => {
  detailsPanel.style.right = "-400px";
  detailsPanel.style.backgroundColor = "white";
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

  detailsPanel.style.right = "10px";
  detailsPanel.style.backgroundColor = "#FF0000";

  detailsContent.innerHTML = `
  <p>Name: ${product.name}</p>
  <p>Description: ${product.description}</p>
  <p>Stock WH: ${product.stock.warehouse}<br>Stock store: ${product.stock.store}</p>
  <p>Color: ${product.specs.color}</p>`;
});

productForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const productName = document.querySelector("#product-name");
  const productCategory = document.querySelector("#product-category");
  const productPrice = document.querySelector("#product-price");
  const productBrand = document.querySelector("#product-brand");
  const productColor = document.querySelector("#product-color");
  const productWarranty = document.querySelector("#product-warranty");
  const productStoreStock = document.querySelector("#product-store-stock");
  const productWarehouseStock = document.querySelector(
    "#product-warehouse-stock",
  );
  const productTags = document.querySelector("#product-tags");
  const productDescription = document.querySelector("#product-description");

  let tags = productTags.value.split(",");
  tags = tags.map((value) => {
    return value.trim();
  });
  console.log(tags);

  // Find the highest id:
  let maxId = 0;
  products.forEach((product) => {
    if (product.id > maxId) {
      maxId = product.id;
    }
  });
  console.log(maxId);

  const newProduct = {
    id: maxId + 1,
    name: productName.value,
    category: productCategory.value,
    price: Number(productPrice.value),
    stock: {
      store: Number(productStoreStock.value),
      warehouse: Number(productWarehouseStock.value),
    },
    specs: {
      brand: productBrand.value,
      color: productColor.value,
      warranty: Number(productWarranty.value),
    },
    tags,
    description: productDescription.value,
  };

  products.push(newProduct);
  renderList();

  productForm.reset();
});
