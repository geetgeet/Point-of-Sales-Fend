/* -- FETCH FUNCRIONS--*/
let products = [];
function getPosts() {
  // Get element to change
  let list = document.getElementById("li-items");

  // Fetch the data
  fetch("http://127.0.0.1:5000/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => {
        products.push(item);
        createsaleItem(item);
      });
    });
}

function createsaleItem(product) {
  const listitem = `<li>
  <div class="product-card">
  <img src="${product.picture}" class="li-image">
  <h1 class="itemName">${product.product_name}</h1>
  <p class="price">R${product.price}</p>
  <button onclick="info('show', ${product.id});" ><i class="fas fa-info"></i></button>
  <p><button class="add-to-cartBtn" onclick="addToCart(${product.id})">Add to Cart</button></p>
</div></li>`;
  let list = document.getElementById("li-items");
  console.log("Hello");
  list.innerHTML += listitem;
}

getPosts();

function removefromCart(id) {
  let recieptTotal = document.getElementsByClassName("total-price")[0];
  let y = parseInt(recieptTotal.innerHTML);
  let x = document.getElementById("product" + id).getAttribute("product-price");
  let total = parseInt(y) - parseInt(x);

  let alpha = `${parseInt(total) - parseInt(x)}`;
  if (total <= -1) {
    alert("Something went Wrong");
    window.location.reload();
  }

  recieptTotal.innerHTML = total;
  document.getElementById("product" + id).remove();
}

/* --ADMIN FUNCTION--*/
function login(showhide) {
  if (showhide == "show") {
    document.getElementById("popupbox").style.visibility = "visible";
  } else if (showhide == "hide") {
    document.getElementById("popupbox").style.visibility = "hidden";
  }
}

function addToCart(id) {
  let cart = document.getElementById("cartList");
  let inCartItems = products.filter((product) => product.id == id);
  let selectedItem = inCartItems[0];
  let cartItem = `
      <li class="rec-li" id="product${id}" product-price=${selectedItem.price}>
        ${selectedItem.product_name} : ${selectedItem.price}
      <button onclick="removefromCart(${id})">Remove</button></li>
    `;
  cart.innerHTML += cartItem;
  products.stocks-1
  console.log(products);

  function calcTotal() {
    let recieptTotal = document.getElementsByClassName("total-price")[0];
    let y = parseInt(recieptTotal.innerHTML);
    let x = document
      .getElementById("product" + id)
      .getAttribute("product-price");

    let total = parseInt(y) + parseInt(x);

    if ( isNaN(total)) {
      alert("Something went Wrong ,Reload Page");
      window.location.reload()
    }

    recieptTotal.innerHTML = total;
    console.log(total);
    console.log(typeof total);
    
  }
  calcTotal();
}
function checkOut() {
  let total = document.getElementsByClassName("total-price")[0].innerHTML;
  alert(`Thank You For Purchasing,Your total is R${total}`);
  document.getElementsByClassName("total-price")[0].innerHTML = "0";
  let clear = "";
  let rec = document.getElementById("cartList");
  rec.innerHTML = clear;
}

function admin() {
  let loginForm = document.getElementById("logForm");
  let inputs = loginForm.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  let users;
  fetch("https://shielded-woodland-34724.herokuapp.com/show-admin/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      user = json;
      console.log(password, username, user);

      let logged = user.filter((user) => {
        return user.username == username && user.password == password;
      });

      if (logged.length >= 1) {
        window.location.href = "./admin.html";
      } else {
        alert("Invalid");
      }
    });
}

// function checkOut() {
//   let a = document.getElementsByClassName("total-price").innerHTML;
//   alert("Your total is", a);
// }
