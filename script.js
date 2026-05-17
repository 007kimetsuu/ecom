let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}


function displayCart() {
    console.log("displayCart running");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartDiv = document.getElementById("cart-items");

    if (!cartDiv) {
        console.error("cart-items div not found");
        return;
    }

    let total = 0;
    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        let quantity = item.quantity || 1;
        let subtotal = item.price * quantity;
        total += subtotal;

        cartDiv.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>

                <div class="qty">
                    <button onclick="decreaseQty(${index})">-</button>
                    <span>${quantity}</span>
                    <button onclick="increaseQty(${index})">+</button>
                </div>

                <p>Subtotal: ₹${subtotal}</p>

                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}


function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}


function goToCart() {
    window.location.href = "cart.html";
}

function increaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart[index].quantity += 1;

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}



function decreaseQty(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
function goToCheckout() {
    window.location.href = "checkout.html";
}
function loadCheckout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let div = document.getElementById("checkout-items");

    let total = 0;
    div.innerHTML = "";

    cart.forEach(item => {
        let quantity = item.quantity || 1;
        let subtotal = item.price * quantity;
        total += subtotal;

        div.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>${quantity} x ₹${item.price}</p>
                <p>₹${subtotal}</p>
            </div>
        `;
    });

    document.getElementById("final-total").innerText = "Total: ₹" + total;
}

function placeOrder() {
    alert("Order placed successfully!");
    localStorage.clear();
    window.location.href = "index.html";
}