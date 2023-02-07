// Define menu items
const menu = [
  {name: "Pizza", price: 9.99},
  {name: "Hamburger", price: 7.99},
  {name: "Fries", price: 3.99},
  {name: "Drink", price: 2.99}
];

// Initialize order and total
let order = [];
let total = 0;

// Add menu item to order
function addToOrder(name) {
  // Find menu item by name
  let item = menu.find(item => item.name === name);
  // Add item to order and update total
  order.push(item);
  total += item.price;
  // Display updated order and total
  displayOrder();
}

// Remove menu item from order
function removeFromOrder(name) {
  // Find menu item by name
  let index = order.findIndex(item => item.name === name);
  // Remove item from order and update total
  let item = order.splice(index, 1)[0];
  total -= item.price;
  // Display updated order and total
  displayOrder();
}

// Display order and total
function displayOrder() {
  let orderList = document.getElementById("order-list");
  let totalDisplay = document.getElementById("total");
  // Clear order list
  orderList.innerHTML = "";
  // Add each item to order list
  order.forEach(item => {
    let itemElement = document.createElement("li");
    itemElement.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
    orderList.appendChild(itemElement);
  });
  // Update total display
  totalDisplay.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Add button event listeners
document.getElementById("pizza-button").addEventListener("click", () => addToOrder("Pizza"));
document.getElementById("hamburger-button").addEventListener("click", () => addToOrder("Hamburger"));
document.getElementById("fries-button").addEventListener("click", () => addToOrder("Fries"));
document.getElementById("drink-button").addEventListener("click", () => addToOrder("Drink"));
