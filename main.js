async function getProducts() {

    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const prods = data.products;

    console.log(prods);
    const result = prods.map(function(ele) {
        return `
<h2>${ele.title} </h2> 
<img src = ${ele.thumbnail} > </img>
`
    });
    document.querySelector('.products').innerHTML = result;
}


getProducts();