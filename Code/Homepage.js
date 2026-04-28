// Simple alert when items are added to cart
document.querySelectorAll('.add-card').forEach(button => {
    button.addEventListener('click', () => {
        const dishName = button.closest('.dish-item').querySelector('h3').innerText;
        alert(`${dishName} added to card!`);
    });
});

// Animation for order buttons
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = "scale(0.95)";
    });
    button.addEventListener('mouseup', () => {
        button.style.transform = "scale(1)";
    });
});