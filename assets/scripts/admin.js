/* -- FETCH FUNCRIONS--*/
function getPosts() {
  // Get element to change

  // Fetch the data
  fetch("https://shielded-woodland-34724.herokuapp.com/show-records/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => createtr(item));
    });
}

function createtr(product) {
  const tableitem = ` <tr data-id=${product.id}>
                <td>${product.id}</td>
                <td><input name="product_name" type='text' value="${product.product_name}" ></td>
                <td><input name="stock" type='text' value="${product.stock}" placeholder="Ava Stock:${product.stock}"></td>
                <td><input name="brand" type='text' value="${product.brand}"></td>
                <td><input name="brand" type='text' value="${product.brand}"></td>
                <td><input name="picture" type='text' value="${product.picture}"></td>
                <td><button type="button" onclick="deleteValues(${product.id})">Delete</button> </td>
                <td><button type="button" onclick="editValues(${product.id})">Edit</button></td>
            </tr>`;
  let list = document.getElementById("table-items");
  console.log("Hello");
  list.innerHTML += tableitem;
}

getPosts();
function admin() {}

function deleteValues(id) {
  if (confirm("Are you sure you want to DELETE item from database?")) {
    fetch(`https://shielded-woodland-34724.herokuapp.com/delete-item/${id}/`, {
      method: "DELETE",
    });
    console.log(id);
  } else {
    alert("Delete Cancelled");
  }

  // let item = document.querySelector(`[data-id="${ id }"]`);
  // console.log(item);
}

function editValues(id) {
  if (confirm("Are you sure you want to commit changes?")) {
    let productItem = document.querySelector(`[data-id="${id}"`);
    let inputs = productItem.getElementsByTagName("input");
    console.log(productItem);

    let product = {
      product_name: inputs[0].value,
      stock: inputs[1].value,
      price: inputs[2].value,
      brand: inputs[3].value,
      picture: inputs[4].value,
    };

    fetch(`https://shielded-woodland-34724.herokuapp.com/edit-item/${id}/`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  } else {
    alert("Changes Cancelled");

    console.log("Thing was not saved to the database.");
  }
}
