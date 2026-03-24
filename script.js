/* Reset */
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

/* Header */
.header {
    background: #222;
    color: #fff;
    padding: 15px;
    text-align: center;
}

.nav-links {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
}

.nav-links li {
    margin: 0 15px;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

/* Categories */
.categories {
    text-align: center;
    padding: 20px;
}

.category-btn {
    margin: 10px;
    padding: 10px 15px;
    border: none;
    background: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

/* Products */
.products {
    padding: 20px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}
