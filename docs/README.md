[payment.js](https://github.com/user-attachments/files/24991159/payment.js)
let menu = [
    { id: 1, name: "Espresso", price: 2.50 },
    { id: 2, name: "Cappuccino", price: 3.75 },
    { id: 3, name: "Latte", price: 4.00 },
    { id: 4, name: "Cold Brew", price: 4.00 },
]; // List of drinks with their IDs, names, and prices![pic1](https://github.com/user-attachments/assets/1058d9bb-47b0-4411-b761-126b011023e6)


let shoppingCart = [];

/**
 * Adds an item to the shopping cart.
 * If the item already exists in the cart, it increases the quantity by 1.
 * If the item is not found in the menu, it does nothing.
 *
*/
function AddToCart(itemId) {
    // Find the item in the menu by its ID
    const item = menu.find(i => i.id === itemId);
    if (!item) return; // If the item is not found, do nothing

    // Check if the item is already in the shopping cart
    const existingItem = shoppingCart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        // If it is, increase the quantity by 1
        existingItem.quantity += 1;
    } else {
        // If it's not, add the item to the cart with quantity 1
        shoppingCart.push({ id: item.id, name: item.name, price: item.price, quantity: 1 });
    }

    // Update the shopping cart display on the page
    updateCartDisplay();
}


/**
 * Updates the shopping cart display on the page.
 * 
 * This function clears the existing cart items list and rebuilds it by iterating
 * through the shoppingCart array. For each item, it creates a list element displaying
 * the item name, quantity, and subtotal price. It also calculates and displays the
 * total cost of all items in the cart.
 *  (JOHNREY)
 *  (DEMO ONLY!!!
 * */
function updateCartDisplay() {
    // Get the shopping cart list from the page
    const ul = document.getElementById("cart-items");
    // Clear old items from the list
    ul.innerHTML = "";
    // Start counting the total price
    let total = 0;

    // Go through each item in the cart
    shoppingCart.forEach(item => {
        // Make a new line for this item
        const li = document.createElement("li");
        // Write the item name, how many, and the price
        li.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        // Add this line to the cart list
        ul.appendChild(li);

        // Add this item's price to the total
        total += item.price * item.quantity;
    });

    // Show the total price at the bottom
    document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    // If cart is empty, tell the user and stop
    if (shoppingCart.length === 0) { alert("Cart is empty!"); return; }

    // Add up all the prices
    let total = shoppingCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    // Say thank you and show the total
    alert(`Thank you for your order! Total: $${total.toFixed(2)}`);

    // Empty the cart
    shoppingCart = [];
    // Update the display to show empty cart
    updateCartDisplay();
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAFE_MOTO</title>
 <link rel="stylesheet" href="styles.css" />

</head>
<body>
    <div class="container">
         <img src="pic1.jpg" alt="CAFE_MOTO Logo" />
         <div class="title">
            <h1>CAFE MOTO</h1>
            <h3>A COFFEE THAT YOU LOVE</h3>
    </div>
  </div>
</section>
    <div class="container001">
        <nav>
            <ul>
                <li><H1><a href="#home">Home</a></H1></li>
                <li><H1><a href="#menu">Menu</a></H1></li>
                <li><H1><a href="#about">About Us</a></H1></li>
                <li><H1><a href="#contact">Contact</a></H1></li>
            </ul>
            <br>
        </nav>
        <main>
            <br>
            <br>
            <section id="home">
    <h1 class="section-title">Home</h1>
    <h3 class="hero-text">Welcome to CAFE MOTO</h3>
    <p class="hero-subtext">
      A cozy place where bold coffee meets smooth flavor.
    </p>
</section>

            <section id="menu">
  <h1>Menu</h1>
  <p>Choose a coffee, download its image, or add it to your cart to checkout.</p>

  <div class="coffee-menu">
    <div class="menu-item" data-name="Espresso" data-price="2.50" data-image="images/espresso.jpg">
      <img src="images/espresso.jpg" alt="Espresso">
      <h3>Espresso <span class="price">$2.50</span></h3>
      <p class="desc">A rich, concentrated shot of coffee.</p>
      <div class="actions">
        <a class="download-btn" href="images/espresso.jpg" download>Download Image</a>
        <button class="add-btn">Add to Cart</button>
      </div>
    </div>

    <div class="menu-item" data-name="Cappuccino" data-price="3.75" data-image="images/cappuccino.jpg">
      <img src="images/cappuccino.jpg" alt="Cappuccino">
      <h3>Cappuccino <span class="price">$3.75</span></h3>
      <p class="desc">Steamed milk & foam.</p>
      <div class="actions">
        <a class="download-btn" href="images/cappuccino.jpg" download>Download Image</a>
        <button class="add-btn">Add to Cart</button>
      </div>
    </div>

    <div class="menu-item" data-name="Latte" data-price="4.00" data-image="images/latte.jpg">
      <img src="images/latte.jpg" alt="Latte">
      <h3>Latte <span class="price">$4.00</span></h3>
      <p class="desc">Creamy steamed milk with espresso.</p>
      <div class="actions">
        <a class="download-btn" href="images/latte.jpg" download>Download Image</a>
        <button class="add-btn">Add to Cart</button>
      </div>
    </div>

    <div class="menu-item" data-name="Cold Brew" data-price="4.00" data-image="images/coldbrew.jpg">
      <img src="images/coldbrew.jpg" alt="Cold Brew">
      <h3>Cold Brew <span class="price">$4.00</span></h3>
      <p class="desc">Slow-steeped, smooth and bold.</p>
      <div class="actions">
        <a class="download-btn" href="images/coldbrew.jpg" download>Download Image</a>
        <button class="add-btn">Add to Cart</button>
      </div>
    </div>

    <div class="menu-item" data-name="Flat White" data-price="3.80" data-image="images/flatwhite.jpg">
  <img src="images/flatwhite.jpg" alt="Flat White">
  <h3>Flat White <span class="price">$3.80</span></h3>
  <p class="desc">Velvety steamed milk with rich espresso.</p>
  <div class="actions">
    <a class="download-btn" href="images/flatwhite.jpg" download>Download Image</a>
    <button class="add-btn">Add to Cart</button>
  </div>
</div>

<div class="menu-item" data-name="Mocha" data-price="4.25" data-image="images/mocha.jpg">
  <img src="images/mocha.jpg" alt="Mocha">
  <h3>Mocha <span class="price">$4.25</span></h3>
  <p class="desc">Espresso blended with chocolate and milk.</p>
  <div class="actions">
    <a class="download-btn" href="images/mocha.jpg" download>Download Image</a>
    <button class="add-btn">Add to Cart</button>
  </div>
</div>

<div class="menu-item" data-name="Macchiato" data-price="3.00" data-image="images/macchiato.jpg">
  <img src="images/macchiato.jpg" alt="Macchiato">
  <h3>Macchiato <span class="price">$3.00</span></h3>
  <p class="desc">Strong espresso marked with a dollop of foamed milk.</p>
  <div class="actions">
    <a class="download-btn" href="images/macchiato.jpg" download>Download Image</a>
    <button class="add-btn">Add to Cart</button>
  </div>
</div>

<div class="menu-item" data-name="Irish Coffee" data-price="5.00" data-image="images/irish-coffee.jpg">
  <img src="images/irishcoffee.jpg" alt="Irish Coffee">
  <h3>Irish Coffee <span class="price">$5.00</span></h3>
  <p class="desc">Hot coffee blended with Irish whiskey and cream.</p>
  <div class="actions">
    <a class="download-btn" href="images/irishcoffee.jpg" download>Download Image</a>
    <button class="add-btn">Add to Cart</button>
  </div>
</div>

<div class="menu-item" data-name="Affogato" data-price="4.50" data-image="images/affogato.jpg">
  <img src="images/affogato.jpg" alt="Affogato">
  <h3>Affogato <span class="price">$4.50</span></h3>
  <p class="desc">Espresso poured over creamy vanilla ice cream.</p>
  <div class="actions">
    <a class="download-btn" href="images/affogato.jpg" download>Download Image</a>
    <button class="add-btn">Add to Cart</button>
  </div>
</div>

<div class="menu-item" data-name="Cortado" data-price="3.50" data-image="images/cortado.jpg">
  <img src="images/cortado.jpg" alt="Cortado">
  <h3>Cortado <span class="price">$3.50</span></h3>
  <p class="desc">Equal parts espresso and steamed milk for a balanced taste.</p>
  <div class="actions">
    <a class="download-btn" href="images/cortado.jpg" download>Download Image</a>
    <button class="add-btn">Add to Cart</button>
  </div>
</div>

<div class="menu-item" data-name="Ristretto" data-price="2.75" data-image="images/ristretto.jpg">
  <img src="images/ristretto.jpg" alt="Ristretto">
  <h3>Ristretto <span class="price">$2.75</span></h3>
  <p class="desc">A shorter, more concentrated espresso shot with intense flavor.</p>
  <div class="actions">
    <a class="download-btn" href="images/ristretto.jpg" download>Download Image</a>
    <button class="add-btn">Add to Cart</button>
  </div>
</div>

<div class="menu-item" data-name="Vienna Coffee" data-price="4.00" data-image="images/vienna.jpg">
  <img src="images/vienna.jpg" alt="Vienna Coffee">
  <h3>Vienna Coffee <span class="price">$4.00</span></h3>
  <p class="desc">Rich espresso topped with whipped cream for a smooth, luxurious taste.</p>
  <div class="actions">
    <a class="download-btn" href="images/vienna.jpg" download>Download Image</a>
    <button class="add-btn">Add to Cart</button>
  </div>
</div>
  </div>

  <div id="cart">
    <h3>Cart</h3>
    <ul id="cart-items"></ul>
    <div id="cart-total">Total: $0.00</div>
    <button id="checkout">Checkout</button>
  </div>

  <!-- PayPal buttons will render here -->
  <div id="paypal-button-container" style="margin-top:12px;"></div>
</section>
            <section id="about">
                <h1>About Us</h1>
                <p>Learn more about our passion for coffee and motorcycles.</p>

            </section>
            <section id="contact">
                <h1>Contact</h1>
                <p>Get in touch with us for any inquiries or feedback.</p>

            </section>
        </main>
        <footer>
            <p>&copy; 2024 CAFE_MOTO. All rights reserved.</p>
        </footer>
    </div>

    <!-- PayPal SDK (use your client id; use 'sb' for sandbox testing) -->
<script src="https://www.paypal.com/sdk/js?client-id=sb&currency=USD"></script>

<!-- Container where PayPal buttons will render -->
<div id="paypal-button-container" style="margin-top:12px;"></div>
</body>
</html>
/* Fonts & Base Colors */
body {
  font-family: 'Open Sans', Arial, sans-serif;
  background: #f5efe6 url('images/texture.png') repeat; /* add a subtle texture image if you want */
  color: #4b3621; /* coffee brown */
  margin: 0;
  padding: 0;
}

/* Header Image & Overlay */
.container {
  position: relative;
  max-height: 400px;
  overflow: hidden;
}
.container img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(70%);
}
.title {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f5efe6;
  font-family: 'Georgia', serif;
  font-size: 3rem;
  font-style: italic;
  text-shadow: 2px 2px 6px #3e2f1c;
  text-align: center;
}
.title h3 {
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 5px;
  font-style: italic;
}

/* Navigation Bar */
.container001 nav {
  background-color: #6F4E37;
  padding: 15px 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.container001 nav ul {
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.container001 nav ul li {
  font-family: 'Georgia', serif;
  font-size: 1.1rem;
  font-weight: bold;
}
.container001 nav ul li a {
  color: #f5efe6;
  text-decoration: none;
  transition: color 0.3s ease;
}
.container001 nav ul li a:hover {
  color: #d28c8c; /* tan */
  text-decoration: underline;
}

/* Section Headings */
section[id] h1 {
  color: #6f3737;
  font-family: 'Georgia', serif;
  font-size: 2.8rem;
  letter-spacing: 2px;
  margin-bottom: 10px;
  border-bottom: 3px solid #d2b48c;
  padding-bottom: 8px;
  text-align: center;
}

/* Hero Text */
.hero-text {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: #6F4E37;
  margin: 30px 0 10px 0;
  text-align: center;
}
.hero-subtext {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #8B4513;
  font-style: italic;
}

/* Menu Cards */
.coffee-menu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 10px 40px;
}

.menu-item {
  background: #fff8f0;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(111, 78, 55, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
}
.menu-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(111, 78, 55, 0.5);
}

.menu-item img {
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 15px;
}

.menu-item h3 {
  font-family: 'Georgia', serif;
  font-size: 1.4rem;
  color: #6F4E37;
  margin-bottom: 6px;
}

.menu-item .price {
  background: #d2b48c;
  color: #4b3621;
  padding: 3px 8px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1rem;
  margin-left: 10px;
}

.menu-item .desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #5a3e1b;
  margin-bottom: 12px;
}

/* Buttons */
.actions {
  display: flex;
  gap: 10px;
}
.download-btn {
  background-color: #f0e1d2;
  color: #6F4E37;
  padding: 8px 12px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
.download-btn:hover {
  background-color: #d2b48c;
  color: #4b3621;
}

.add-btn {
  background-color: #6F4E37;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
.add-btn:hover {
  background-color: #4b3621;
}

/* Cart Styling */
#cart {
  background: #fff8f0;
  border-radius: 10px;
  padding: 20px 30px;
  margin-top: 40px;
  box-shadow: 0 6px 12px rgba(111, 78, 55, 0.3);
}
#cart h3 {
  font-family: 'Georgia', serif;
  color: #6F4E37;
  margin-bottom: 20px;
}
#cart-items li {
  border-bottom: 1px solid #d2b48c;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  color: #5a3e1b;
}
#cart-total {
  font-weight: 700;
  font-family: 'Georgia', serif;
  color: #6F4E37;
  margin-top: 15px;
  font-size: 1.2rem;
}
#checkout {
  background-color: #6F4E37;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 20px;
  font-weight: 700;
}
#checkout:hover {
  background-color: #4b3621;
}

/* Footer */
footer {
  text-align: center;
  padding: 20px;
  background-color: #6F4E37;
  color: #f5efe6;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  margin-top: 50px;
}

section#menu p {
  color: #6f3737;
  font-family: 'Georgia', serif;
  font-size: 1rem;
  margin-top: 8px;
  margin-bottom: 20px;
  line-height: 1.4;
}

section#menu p {
  color: #6f3737;
  font-family: 'Georgia', serif; 
  font-size: 1rem; 
  margin-top: 8px;
  margin-bottom: 20px;
  line-height: 1.4;
}
