let menu = [
    { id: 1, name: "Espresso", price: 2.50 },
    { id: 2, name: "Cappuccino", price: 3.75 },
    { id: 3, name: "Latte", price: 4.00 },
    { id: 4, name: "Cold Brew", price: 4.00 },
]; // List of drinks with their IDs, names, and prices

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