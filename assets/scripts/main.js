/* -- FETCH FUNCRIONS--*/
let products = [];
function getPosts() {
  // Get element to change
  let list = document.getElementById("li-items");

  // Fetch the data
  fetch("http://127.0.0.1:5000/show-records/")
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
    <div class="product-container" >
              <img src="${product.picture}" class="li-image" />
              <div class="icon-overlay">
               <button class="info-btn"  onclick="info('show', ${product.id});">Info</button>
                <p id='product_price'>R${product.price}</p>
                <p id='product_name' class="item-name"><h3>${product.product_name}</h3></p>
                <button class="addtocart-btn" onclick="addToCart(${product.id})">Buy &#43</button>
                
              </div>
              
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
  console.log(products);

  function calcTotal() {
    let recieptTotal = document.getElementsByClassName("total-price")[0];
    let y = parseInt(recieptTotal.innerHTML);
    let x = document
      .getElementById("product" + id)
      .getAttribute("product-price");
    let total = parseInt(y) + parseInt(x);
    let alpha = `${parseInt(total) + parseInt(x)}`;

    recieptTotal.innerHTML = total;
    console.log(total);
  }
  function checkOut() {
    let a = document.getElementsByClassName("total-price").innerHTML;
    console.log(a);
    console.log(
      parseInt(document.getElementsByClassName("total-price").innerHTML)
    );
    alert("Your total is", total);
  }
  calcTotal();
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