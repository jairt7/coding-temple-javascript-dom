let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];
function displayProducts(products) {
    let productsDiv = document.getElementById('products');
    products.forEach(product => {
        productsDiv.innerHTML += `
        <div class="product">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        </div>
        `
    })
}

function getFormData() {
    let contact = {}
    let contactForm = document.getElementById('contact');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let formData = new FormData(contactForm)
        formData.forEach((value, key) => {
            contact[key] = value
        })
        console.log(contact)
    })
}

document.addEventListener(`DOMContentLoaded`, () => {displayProducts(products), getFormData()})

function changeColor() {
    let colorChangingButton = document.getElementById('color-button');
    if (colorChangingButton.style.backgroundColor === 'purple') {
        colorChangingButton.style.backgroundColor = '';
        colorChangingButton.style.color = '';
    } else {
        colorChangingButton.style.backgroundColor = 'purple';
        colorChangingButton.style.color = 'white';
    }
}

function getBigger() {
    let biggerButton = document.getElementById('bigger-button');
    biggerButton.style.fontSize = '150%';
}

function shrinkBack() {
    let biggerButton = document.getElementById('bigger-button');
    biggerButton.style.fontSize = '100%';
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    getFormData();
    
    let biggerButton = document.getElementById('bigger-button');
    biggerButton.addEventListener('mouseleave', shrinkBack);
});