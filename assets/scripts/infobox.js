function info(showhide, id) {
  if (showhide == "show") {
    document.getElementById("infobox").style.visibility = "visible";

    itemInfo(id);
  } else if (showhide == "hide") {
    document.getElementById("infobox").style.visibility = "hidden";
    document.getElementById("infobox").innerHTML = "";
  }
}

function itemInfo(id) {
  let cart = document.getElementById("infobox");
  let inCartItems = products.filter((product) => {
    return product.id == id;
  });
  let selectedItem = inCartItems[0];
  let cartItem = `
        <p class="rec-li" id="product${id}" product-price=${selectedItem.price}>
          ${selectedItem.product_name} : ${selectedItem.price}</p>

          <p>Item Name:${selectedItem.product_name}</p>
          <p>Brand:${selectedItem.brand}</p>
          <p>Price:R${selectedItem.price}</p>
        <button onclick="info('hide')">Close</button>
      `;
  cart.innerHTML += cartItem;
  console.log(products);
}
