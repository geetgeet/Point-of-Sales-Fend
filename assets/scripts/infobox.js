// function myFunction(id) {
//   var x = document.getElementById("infobox");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//     itemInfo(id);
//   } else {
//     x.style.display = "none";
//   }
// }

function info(showhide, id) {
  let isVisible = document.getElementById("infobox").style.visibility;
  console.log(isVisible);

  isVisible == "visible"
    ? ((document.getElementById("infobox").style.visibility = "hidden"),
      (document.getElementById("infobox").innerHTML = ""))
    : ((document.getElementById("infobox").style.visibility = "visible"),
      (document.getElementById("infobox").innerHTML = itemInfo(id)));
  // if (showhide == "show") {
  //   document.getElementById("infobox").style.visibility = "visible";

  //   itemInfo(id);
  // } else if (showhide == "hide") {
  //   document.getElementById("infobox").style.visibility = "hidden";
  //   document.getElementById("infobox").innerHTML = "";
  // }
}

function itemInfo(id) {
  let cart = document.getElementById("infobox");
  console.log(id);
  let block = products.filter((product) => {
    return product.id == id;
  });
  console.log(products, block);
  let selectedItem = block[0];
  let cartItem = `
        <p class="rec-li" id="infoproduct${id}" product-price=${selectedItem.price}>
         <p> ${selectedItem.product_name} : ${selectedItem.price}</p>

          <p>Item Name:${selectedItem.product_name}</p>
          <p>Brand:${selectedItem.brand}</p>
          <p>Stock:${selectedItem.stocks}</p>
          <p>Price:R${selectedItem.price}</p>
        <button onclick="info('hide')">Close</button>
      `;
  console.log(products);
  return cartItem;
}
