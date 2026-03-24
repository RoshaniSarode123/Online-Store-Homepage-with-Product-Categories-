body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Header */
header {
    background: #333;
    color: white;
    padding: 15px;
    text-align: center;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}

nav ul li {
    margin: 0 15px;
    cursor: pointer;
}

/* Categories */
.categories {
    text-align: center;
    padding: 20px;
}

.category-list button {
    margin: 10px;
    padding: 10px 15px;
    cursor: pointer;
}

/* Products */
.products {
    padding: 20px;
}

#product-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}