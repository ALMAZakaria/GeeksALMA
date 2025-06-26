const products = require('./products');

function findProduct(productName) {
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
    if (product) {
        console.log('Product found:');
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Category: ${product.category}`);
    } else {
        console.log(`Product "${productName}" not found.`);
    }
}

// Test the function with different product names
console.log('Searching for products...\n');
findProduct('Laptop');
console.log('\n');
findProduct('Headphones');
console.log('\n');
findProduct('NonExistentProduct'); 