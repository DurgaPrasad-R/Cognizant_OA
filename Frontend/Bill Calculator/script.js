function calculateBill() {
  const price = document.getElementById("price");
  const qty = document.getElementById("qty");
  const total = price.value * qty.value;

  document.getElementById("output").innerHTML = total;
}
