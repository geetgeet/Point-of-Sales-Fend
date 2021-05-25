let productsBrand = [];

// Fetch the data
fetch("https://shielded-woodland-34724.herokuapp.com/show-records/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    productsBrand = data;
  });

function searchBrand(brand) {
  let showItem = document.getElementById("li-items");
  showItem.innerHTML = "";

  let filterBrand = products.filter((products) => {
    return products.brand == brand;
  });
  filterBrand.forEach((product) => {
    showItem.innerHTML += `<li>
  <div class="product-card">
  <img src="${product.picture}" class="li-image">
  <h1>${product.product_name}</h1>
  <p class="price">R${product.price}</p>
  <p class="stock">R${product.stocks}</p>
  <button onclick="info('show', ${product.id});" ><i class="fas fa-info"></i></button>
  <p><button class="add-to-cartBtn" onclick="addToCart(${product.id})">Add to Cart</button></p>
</div></li>`;
  });
  console.log(filterBrand);
}
