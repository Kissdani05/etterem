const buttons = document.querySelectorAll(".addtocart")
var cartVisibility = document.getElementById("rendeles");
cartVisibility.style.visibility="hidden"
var cart = [];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartVisibility.style.visibility="visible"
    cart.push(button.parentElement.querySelectorAll("p"));
    renderCart();
  })
})


// reload cart's content in kosar div
function renderCart() {
  let kosar = document.getElementById("kosar")
  kosar.innerHTML = ""
  cart.forEach(item => {
    console.log(item);
    kosar.innerHTML += `<div>Étel neve: ${item[0].innerHTML}, ár: ${item[1].innerHTML}</div>`
  })
}


//clear
document.getElementById("clearCart").addEventListener("click", () => {
  cart.splice(0, cart.length);
  renderCart();
})

document.getElementById("submitCartItems").addEventListener("click", () => {
  alert("Sikeres megrendelés");
  cart.splice(0, cart.length);
  renderCart();
})