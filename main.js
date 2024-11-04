const productList = document.getElementById('productList')

//Task 2: Fetch Products from the API Using Fetch and Promises
fetch('https://www.course-api.com/javascript-store-products')
    .then(response=> {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response)
        return response.json()
    })
    .then(products =>{
        console.log(products)
        products.forEach(product =>{
            const productFields = product.fields
            const listItem = document.createElement('li')
            listItem.textContent = `${productFields.name} - $${productFields.price}`
            productList.appendChild(listItem)
            
//Task 3: Display Product Details Dynamically
const productName = product.fields.name
const companyName = product.fields.company;
const productPrice = product.fields.price;
const productImageUrl = product.fields.image[0].url;

listItem.innerHTML = `${productName} by ${companyName}: $${productPrice} 
<img src="${productImageUrl}" alt="${productName}" style="width: 100px; height: 100px; margin-left: 15px;">`

productList.appendChild(listItem)
})})
