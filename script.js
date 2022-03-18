// function getFlavourValue() {
//   var selectedValue = document.getElementById("flavour").value;
//   return (selectedValue);
// }
function getSizeValue() {
  var selectedValue = document.getElementById("size").value;
  return parseInt(selectedValue);
}
function getCrust() {
  var selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}
function getToppings() {
  var selectedToppings = document.getElementById("toppings").value;
  return parseInt(selectedToppings);
}
function getQuantity() {
  var selectedQuantity = document.getElementById("quantity").value;
  return parseInt(selectedQuantity);
}

function getTotalAmount() {
  var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
  alert("You have Ordered" + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
  prompt("enter your location")
  alert("You delivery fee is 150/=")
  alert("You order will be delivered shortly")
  alert("Continue shoppping with us each and every time .")
}

// $("#checkout").click(function () {
//   let flavour = $(".flavour option:selected").val();
//   let size = $("#size option:selected").val();
//   let crust = $("#crust option:selected").val();
//   let topping = $("#toppings option:selected").val();
//   let number = $("#number").val();
//   console.log(size);
// }