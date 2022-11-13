const foodDivs = document.querySelectorAll(".etelek");
var cartVisibility = document.getElementById("rendeles");
cartVisibility.style.visibility = "hidden";
var cart = [];
var addedIds = [];


foodDivs.forEach(foodDiv => {
  foodDiv.addEventListener("click", (e) => {
    cartVisibility.style.visibility = "visible";
      if (addedIds.includes(e.target.id) == true){
        alert("A termék már hozzá van adva")
      } else{
        cart.push(foodDiv.querySelectorAll("p"));
        renderCart();
        addedIds.pop();
        addedIds.push(e.target.id)
        alert("id")
      }
      

      // cart.push(foodDiv.querySelectorAll("p"));
      // renderCart();
      // alert(e.target.id)
      // alert("a termék már hozzá lett adva");
      


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
  if (confirm("Törli a megrendelést?") == true) {
    alert("A kosár tartalma eltávolítva")
    cart.splice(0, cart.length);
    renderCart();
    cartVisibility.style.visibility = "hidden";
  } else {
    alert("A kosár tartalma nem lett eltávolítva")
  }

})

//submit
document.getElementById("submitCartItems").addEventListener("click", () => {
  alert("Sikeres megrendelés");
  cart.splice(0, cart.length);
  renderCart();
  cartVisibility.style.visibility = "hidden";
  
})