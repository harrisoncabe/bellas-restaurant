// Bella's Restaurant - Main JavaScript

// Shopping cart state
let cart = [];

// Shopping Cart Functions
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
    
    // Show confirmation
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Added!';
    btn.style.background = '#27ae60';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        document.getElementById('total').textContent = '0.00';
    } else {
        let html = '';
        let total = 0;
        
        cart.forEach((item, index) => {
            total += item.price;
            html += `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                    <button onclick="removeFromCart(${index})" style="background: #e74c3c; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">Remove</button>
                </div>
            `;
        });
        
        cartItems.innerHTML = html;
        document.getElementById('total').textContent = total.toFixed(2);
    }
    
    modal.style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    openCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // This is a non-functional checkout button (proof of concept)
    // In production, this would integrate with Stripe
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Ready to checkout!\n\nTotal: $${total.toFixed(2)}\n\n(This is a proof of concept - not connected to payment processing)`);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target == modal) {
        closeCart();
    }
}