// Cursor
const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Dark Mode
function toggleDark(){
  document.body.classList.toggle('dark');
}

// Navigation
function goShop(){
  window.location.href="products.html";
}

// Cart
function addToCart(name,price){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to cart 🛒");
}

// WhatsApp
function whatsapp(){
  window.open("https://wa.me/27657377004");
}
