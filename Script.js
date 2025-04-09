const cartButtons = document.querySelectorAll('.add-to-cart');
let cartCount = 0;

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;