function showHoodies() {
    document.getElementById('hoodie-cards').classList.add('active');
    document.getElementById('tshirt-cards').classList.remove('active');
}

function showTshirts() {
    document.getElementById('hoodie-cards').classList.remove('active');
    document.getElementById('tshirt-cards').classList.add('active');
}

let cartItems = [];

function addToCart(itemNumber, size) {
    let itemCode = `${itemNumber}${size}`;
    cartItems.push(itemCode);
    displayCartCode();
}

function displayCartCode() {
    document.getElementById("cart-code").innerText = `Cart Code: ${cartItems.join('-')}`;
}

function copyCartCode() {
    let cartCodeString = cartItems.join('-');
    navigator.clipboard.writeText(cartCodeString).then(() => {
        alert("Cart code copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy cart code: ", err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let cartDisplay = document.createElement("div");
    cartDisplay.id = "cart-code";
    cartDisplay.style.fontSize = "16px";
    cartDisplay.style.marginTop = "10px";
    document.body.appendChild(cartDisplay);

    document.querySelectorAll(".atcb").forEach(button => {
        button.addEventListener("click", (event) => {
            let card = event.target.closest(".card");
            let itemNumber = card.getAttribute("data-item-number"); // Get the item number from a data attribute
            let sizeSelector = card.querySelector(".size-selector");
            let size = sizeSelector ? sizeSelector.value : "M"; // Default size if not selected
            addToCart(itemNumber, size);
        });
    });

    let copyButton = document.querySelector(".code-section");
    if (copyButton) {
        copyButton.addEventListener("click", copyCartCode);
    }
});
