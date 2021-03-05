function addItem() {
  const inputs = document.getElementsByTagName("input");
  //   let boo = {
  //       product_name: inputs[0].value,
  //       price: inputs[1].value,
  //       brand: inputs[2].value,
  //       picture: inputs[3].value
  //     };

  //     console.log(boo);
  fetch("http://127.0.0.1:5000/add-new-record/", {
    method: "POST",
    body: JSON.stringify({
      product_name: inputs[0].value,
      price: inputs[1].value,
      brand: inputs[2].value,
      picture: inputs[3].value,
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
