// Product Data
const products = [
    {
        name: "Smartphone",
        price: 15000,
        category: "Electronics",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "T-Shirt",
        price: 500,
        category: "Fashion",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Microwave",
        price: 7000,
        category: "Home Appliances",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Book",
        price: 300,
        category: "Books",
        image: "https://via.placeholder.com/150"
    }
];

// Display Products
const container = document.getElementById("product-container");

function displayProducts(productList) {
    container.innerHTML = "";

    productList.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button>Add to Cart</button>
        `;

        container.appendChild(card);
    });
}

// Initial Load
displayProducts(products);
