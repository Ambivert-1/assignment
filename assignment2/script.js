document.addEventListener("DOMContentLoaded", function() {
    const DEMO_URL = 'https://course-api.com/react-store-products'; 

    // Function to fetch product details
    function fetchProductDetails() {
        return new Promise((resolve, reject) => {
            fetch(DEMO_URL)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    // Function to display product details
    function displayProductDetails(product) {
        const titleElement = document.querySelector('.product-title');
        const descriptionElement = document.querySelector('.product-description');
        const priceElement = document.querySelector('.product-price');

        titleElement.textContent = product.name;
        descriptionElement.textContent = product.description;
        priceElement.textContent = `Price: $${product.price}`;
    }

    // Fetch and display product details
    fetchProductDetails()
        .then(product => displayProductDetails(product))
        .catch(error => {
            const titleElement = document.querySelector('.product-title');
            titleElement.textContent = 'Failed to load product details';
            console.error('Error fetching product details:', error);
        });
});
