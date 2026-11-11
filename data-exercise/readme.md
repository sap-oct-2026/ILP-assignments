# JavaScript Exercise — Product Catalog

## Objective

Build a product catalog using **JavaScript arrays, objects, nested objects, loops, and DOM manipulation**.

You are given the HTML, CSS, and a JavaScript array containing product data. **Write all the JavaScript logic yourself.** Do not use JSON, APIs, or a backend.

## Main Exercise — Display the Products

An electronics store has supplied an array of products. Each product has a name, category, price, stock information, specifications, tags, and a description.

### Requirements

1. Loop through the `products` array.
2. Create a table row for each product using JavaScript.
3. Display the product's **name**, **category**, and **price**.
4. Display **"In stock"** if the total of `stock.store` and `stock.warehouse` is greater than zero; otherwise, display **"Out of stock"**.
5. Insert the generated rows into the existing table body (`products-body`).
6. Display the total number of products in the `product-count` element.

**Important:** Do not manually add product rows to the HTML. The table must be generated from the JavaScript data.

## Bonus 1 — Product Details Panel

Add a **View Details** button to each product row.

### Requirements

1. When a button is clicked, show the details panel on the side.
2. Display the **selected product's name, description, brand, color, warranty, tags, store stock, and warehouse stock**.
3. Clicking the button for another product must update the panel with that product's information.
4. The information must come from the product object, not from hardcoded HTML.

The HTML already contains `details-panel` and `details-content` for this purpose.

## Bonus 2 — Add New Products with a Form

Allow users to add new products using the form below the table, without refreshing the page.

### Requirements

1. Read the values entered in the form.
2. Create a new JavaScript object with the **same structure** as the existing products.
3. Generate a unique `id` for the new product.
4. Add the product to the `products` array.
5. Update the table to display the new product.
6. Update the total product count.
7. Clear the form after a successful submission.
8. Prevent the page from refreshing on submission.
9. Make sure new products also work with the **View Details** button from Bonus 1.

For example, a newly added product might have this structure:

```javascript
{
  id: 6,
  name: "Gaming Headset",
  category: "Audio",
  price: 79.99,
  stock: {
    store: 5,
    warehouse: 10
  },
  specs: {
    brand: "HyperX",
    color: "Red",
    warranty: 24
  },
  tags: ["Gaming", "Wireless", "RGB"],
  description: "Comfortable headset for gaming."
}
```

This is an example of the **data structure**, not the JavaScript implementation.

## Project Structure

```text
product-catalog/
├── index.html
├── style.css
└── app.js
```

## File 1 — `index.html`

The HTML, element IDs, table headers, details panel, and form are already provided.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Catalog</title>
  <link rel="stylesheet" href="style.css">
  <script src="app.js" defer></script>
</head>
<body>

  <header>
    <h1>Product Catalog</h1>
    <p>Explore our electronics store</p>
  </header>

  <main class="layout">

    <!-- MAIN EXERCISE: PRODUCT TABLE -->
    <section class="catalog">
      <h2>Available Products</h2>
      <p id="product-count"></p>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="products-body">
          <!-- Generate product rows using JavaScript -->
        </tbody>
      </table>

      <!-- BONUS 2: ADD PRODUCT FORM -->
      <section class="add-product">
        <h2>Add New Product</h2>
        <p>Fill in the information below to add a product.</p>

        <form id="product-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="product-name">Product Name</label>
              <input type="text" id="product-name" required>
            </div>

            <div class="form-group">
              <label for="product-category">Category</label>
              <select id="product-category" required>
                <option value="">Select a category</option>
                <option value="Accessories">Accessories</option>
                <option value="Connectivity">Connectivity</option>
                <option value="Displays">Displays</option>
                <option value="Audio">Audio</option>
              </select>
            </div>

            <div class="form-group">
              <label for="product-price">Price (€)</label>
              <input type="number" id="product-price"
                     min="0.01" step="0.01" required>
            </div>

            <div class="form-group">
              <label for="product-brand">Brand</label>
              <input type="text" id="product-brand" required>
            </div>

            <div class="form-group">
              <label for="product-color">Color</label>
              <input type="text" id="product-color" required>
            </div>

            <div class="form-group">
              <label for="product-warranty">Warranty (months)</label>
              <input type="number" id="product-warranty"
                     min="0" step="1" required>
            </div>

            <div class="form-group">
              <label for="product-store-stock">Store Stock</label>
              <input type="number" id="product-store-stock"
                     min="0" step="1" required>
            </div>

            <div class="form-group">
              <label for="product-warehouse-stock">Warehouse Stock</label>
              <input type="number" id="product-warehouse-stock"
                     min="0" step="1" required>
            </div>

            <div class="form-group full-width">
              <label for="product-tags">Tags (separated by commas)</label>
              <input type="text" id="product-tags"
                     placeholder="Wireless, Gaming, RGB" required>
            </div>

            <div class="form-group full-width">
              <label for="product-description">Description</label>
              <textarea id="product-description" rows="3" required></textarea>
            </div>
          </div>

          <button type="submit">Add Product</button>
        </form>
      </section>
    </section>

    <!-- BONUS 1: PRODUCT DETAILS -->
    <aside id="details-panel" hidden>
      <h2>Product Details</h2>
      <div id="details-content">
        <!-- Generate details of the selected product using JavaScript -->
      </div>
    </aside>

  </main>
</body>
</html>
```

## File 2 — `style.css`

The styling is complete. You do not need to edit it to complete the exercise.

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f6f9;
  color: #263445;
}

header {
  background: #233752;
  color: white;
  padding: 30px;
  text-align: center;
}

header h1 {
  margin-bottom: 8px;
}

.layout {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
}

.catalog {
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  background: white;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 2px 8px #00000012;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid #e1e5eb;
}

th {
  background: #edf2f7;
}

tr:hover {
  background: #f8fafc;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 9px 14px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

/* BONUS 1: PRODUCT DETAILS PANEL */

#details-panel {
  width: 280px;
  flex-shrink: 0;
  padding: 24px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px #00000012;
}

#details-panel[hidden] {
  display: none;
}

#details-content p {
  line-height: 1.6;
}

#details-content ul {
  padding-left: 20px;
}

/* BONUS 2: ADD PRODUCT FORM */

.add-product {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 2px solid #e1e5eb;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 24px 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-weight: bold;
  font-size: 14px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccd4df;
  border-radius: 5px;
  font: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: 2px solid #2563eb;
  outline-offset: 1px;
}

.full-width {
  grid-column: 1 / -1;
}

.add-product button {
  margin-top: 5px;
}

@media (max-width: 800px) {
  .layout {
    flex-direction: column;
  }

  .catalog, #details-panel {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
```

## File 3 — `app.js`

**Only the data is provided.** Write the full JavaScript implementation below the array.

```javascript
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 24.99,
    stock: {
      store: 12,
      warehouse: 35
    },
    specs: {
      brand: "Logitech",
      color: "Black",
      warranty: 24
    },
    tags: ["Wireless", "Ergonomic"],
    description: "Comfortable wireless mouse for everyday use."
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 89.90,
    stock: {
      store: 4,
      warehouse: 10
    },
    specs: {
      brand: "Keychron",
      color: "Gray",
      warranty: 24
    },
    tags: ["Mechanical", "RGB", "USB-C"],
    description: "Mechanical keyboard with customizable lighting."
  },
  {
    id: 3,
    name: "USB-C Hub",
    category: "Connectivity",
    price: 39.50,
    stock: {
      store: 0,
      warehouse: 0
    },
    specs: {
      brand: "Anker",
      color: "Silver",
      warranty: 18
    },
    tags: ["USB-C", "HDMI", "Portable"],
    description: "Compact adapter for connecting multiple devices."
  },
  {
    id: 4,
    name: "27-inch Monitor",
    category: "Displays",
    price: 229.00,
    stock: {
      store: 3,
      warehouse: 7
    },
    specs: {
      brand: "Dell",
      color: "Black",
      warranty: 36
    },
    tags: ["4K", "IPS", "HDMI"],
    description: "High-resolution monitor ideal for studying and work."
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 59.99,
    stock: {
      store: 6,
      warehouse: 15
    },
    specs: {
      brand: "JBL",
      color: "Blue",
      warranty: 12
    },
    tags: ["Bluetooth", "Portable", "Rechargeable"],
    description: "Portable speaker with clear sound and a rechargeable battery."
  }
];
```

## Hints

### Main Exercise

- `products.length` gives the total number of products.
- Use a `for` loop or `forEach()` to visit each product.
- Access nested data using dot notation, such as `products[0].stock.store`.
- Use `document.querySelector()` to find HTML elements.
- Consider `createElement()` or `innerHTML` to build table rows.

### Bonus 1

- Use `addEventListener("click", ...)` to react to a button click.
- The product's `id` can help identify which product was selected.
- Add details inside `details-content`.
- Set the panel's `hidden` property to `false` when showing it.
- You can loop through the product's `tags` array to display its tags.

### Bonus 2

- Use `addEventListener("submit", ...)` to handle the form.
- Use `event.preventDefault()` to stop the page from refreshing.
- `.value` reads the value of a form control.
- `Number()` converts input strings into numbers.
- `.split(",")` can convert comma-separated tags into an array.
- `.push()` adds an item to an array.
- `.reset()` clears a form.
- Consider creating a reusable function to render the table after data changes.

## Testing Checklist

- [ ] The page displays all five initial products.
- [ ] The product count displays `5`.
- [ ] The USB-C Hub displays **Out of stock**.
- [ ] The other four products display **In stock**.
- [ ] Each **View Details** button displays the correct product's information.
- [ ] Clicking a different button updates the details panel.
- [ ] Submitting the form adds a new product to the table.
- [ ] The product count increases from `5` to `6` after adding one product.
- [ ] Newly added prices and stock values are stored as numbers.
- [ ] Tags are stored as an array, not as one comma-separated string.
- [ ] Each new product has a unique ID.
- [ ] The form clears after submitting and the page does not refresh.
- [ ] A newly added product's **View Details** button works.

**Note:** Products do not need to persist after refreshing the page. All changes can remain in memory while the page is open.
