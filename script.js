/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial;
    background: #f5f5f5;
}

/* Header */
.header {
    background: #333;
    color: white;
    padding: 15px;
    text-align: center;
}

.nav-links {
    display: flex;
    justify-content: center;
    list-style: none;
}

.nav-links li {
    margin: 0 10px;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.nav-links a:hover {
    color: #00c3ff;
}

/* Categories */
.categories {
    text-align: center;
    padding: 20px;
}

.category-btn {
    padding: 10px;
    margin: 10px;
    background: blue;
    color: white;
    border: none;
    border-radius: 5px;
}

/* Products */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

/* Product Card */
.product-card {
    background: white;
    padding: 10px;
    text-align: center;
}

.product-card img {
    width: 100%;
}

.product-card button {
    background: green;
    color: white;
    border: none;
    padding: 8px;
    cursor: pointer;
}

.product-card:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
