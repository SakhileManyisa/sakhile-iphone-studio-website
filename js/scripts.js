/* ==========================
   CUSTOM CURSOR
========================== */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

/* ==========================
   DARK MODE TOGGLE
========================== */
function toggleDark() {
  document.body.classList.toggle('dark');
}

/* ==========================
   NAVIGATION
========================== */
function goShop() {
  window.location.href = 'products.html';
}

/* ==========================
   CART FUNCTIONS
========================== */
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart 🛒`);
}

/* ==========================
   VIEW PRODUCT
========================== */
function view() {
  window.location.href = 'products.html';
}

/* ==========================
   WHATSAPP CHAT
========================== */
function whatsapp() {
  window.open('https://wa.me/27657377004');
}

/* ==========================
   PAYFAST FORM HANDLER
========================== */
const payfastForm = document.getElementById('payfastForm');
if(payfastForm){
  payfastForm.addEventListener('submit', function(e){
    const amount = prompt("Enter amount to pay (ZAR):");
    const itemName = "iPhone Repair / Purchase";
    const nameFirst = prompt("First Name:");
    const nameLast = prompt("Last Name:");
    const email = prompt("Email Address:");

    if(!amount || !nameFirst || !nameLast || !email){
      alert("Please fill out all details.");
      e.preventDefault();
      return false;
    }

    document.getElementById('pf_amount').value = amount;
    document.getElementById('pf_item_name').value = itemName;
    document.getElementById('pf_name_first').value = nameFirst;
    document.getElementById('pf_name_last').value = nameLast;
    document.getElementById('pf_email').value = email;
  });
}

/* ==========================
   MOBILE MENU TOGGLE
========================== */
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });

  menuToggle.addEventListener('keyup', (e) => {
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      menuToggle.click();
    }
  });
}
