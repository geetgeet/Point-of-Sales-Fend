function checkOut() {
  let a = document.getElementsByClassName("total-price").innerHTML;
  console.log(a);
  console.log(
    parseInt(document.getElementsByClassName("total-price").innerHTML)
  );
  alert("Your total is", a);
}
