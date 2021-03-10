function searchProducts() {
  // Get data from form
  let form = document.getElementById("search-form");
  let searchTerm = form.getElementsByTagName("input")[0].value;
  // Create Regular Expression
  let searchRegEx = new RegExp(searchTerm, "i");
  // Fetch data to search from
  fetch("https://shielded-woodland-34724.herokuapp.com/show-records/")
    .then((response) => response.json())
    .then((json) => {
      // Filter data
      let result = json.filter((product) => {
        return product.product_name.search(searchRegEx) !== -1;
      });
      // Check if there are found results
      if (result.length > 0) {
        // Render items that matched
        document.getElementById("li-items").innerHTML = "";
        result.forEach((product) => createsaleItem(product));
      } else {
        // Alert nothing found
        alert("nothing found");
      }
    })
    .catch((err) => {
      // Log any error from back end
      console.log(err);
    });
}
