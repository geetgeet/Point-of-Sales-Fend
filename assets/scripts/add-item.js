function addItem() {
  const inputs = document.getElementsByTagName("input");
  //   let boo = {
  //       product_name: inputs[0].value,
  //       price: inputs[1].value,
  //       brand: inputs[2].value,
  //       picture: inputs[3].value
  //     };

  //     console.log(boo);
  fetch("https://shielded-woodland-34724.herokuapp.com/add-new-record/", {
    method: "POST",
    body: JSON.stringify({
      product_name: inputs[0].value,
      stock: inputs[1].value,
      price: inputs[2].value,
      brand: inputs[3].value,
      picture: inputs[4].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("Item has been added and Created");
      document.getElementById("create-form").reset();
    });
}
