const foodDivs = document.querySelectorAll(".etelek");
var cartVisibility = document.getElementById("rendeles");
cartVisibility.style.visibility = "hidden";

let leves = null
let levesId = null

let foetel = null
let foetelId = null

let desszert = null
let desszertId = null

function SetDefaultBackground(id) {
  if (id != null) {
    document.getElementById(id).style.backgroundColor = "#A59B91";
    
  }
}

foodDivs.forEach(foodDiv => {
  foodDiv.addEventListener("click", (e) => {
    foodDiv.style.backgroundColor = "lightblue";
    switch (foodDiv.title) {
      case "leves":
        if (foodDiv.id == levesId) {
          alert("A termék már hozzá van adva")
        } else {
          document.getElementById("label-1").style.backgroundColor = "lightblue";
          SetDefaultBackground(levesId);
          leves = foodDiv;
          levesId = foodDiv.id;
        }
        break;
      case "foetel":
        if (foodDiv.id == foetelId) {
          alert("A termék már hozzá van adva")
        } else {
          document.getElementById("label-2").style.backgroundColor = "lightblue";
          SetDefaultBackground(foetelId);
          foetel = foodDiv;
          foetelId = foodDiv.id;
        }
        break;
      case "desszert":
        if (foodDiv.id == desszertId) {
          alert("A termék már hozzá van adva")
        } else {
          document.getElementById("label-3").style.backgroundColor = "lightblue";
          SetDefaultBackground(desszertId);
          desszert = foodDiv;
          desszertId = foodDiv.id;
        }
        break;
    }
    renderCart();
  })
})

function renderCart() {
  const kosar = document.getElementById("kosar");
  kosar.innerHTML = "";
  cartVisibility.style.visibility = "visible";
  if (levesId != null) {
    kosar.innerHTML += `<div>Leves: ${leves.querySelectorAll('p')[0].innerHTML}, ár: ${leves.querySelectorAll('p')[1].innerHTML}</div>`
  }
  if (foetelId != null) {
    kosar.innerHTML += `<div>Főétel: ${foetel.querySelectorAll('p')[0].innerHTML}, ár: ${foetel.querySelectorAll('p')[1].innerHTML}</div>`
  }
  if (desszertId != null) {
    kosar.innerHTML += `<div>Desszert: ${desszert.querySelectorAll('p')[0].innerHTML}, ár: ${desszert.querySelectorAll('p')[1].innerHTML}</div>`
  }
}


function ClearAll(){
  document.getElementById("kosar").innerHTML = "";
    SetDefaultBackground(levesId);
    levesId = null
    SetDefaultBackground(foetelId);
    foetelId = null
    SetDefaultBackground(desszertId);
    desszertId = null
    cartVisibility.style.visibility = "hidden";
    document.getElementById("label-1").style.backgroundColor = "#A59B91";
    document.getElementById("label-2").style.backgroundColor = "#A59B91";
    document.getElementById("label-3").style.backgroundColor = "#A59B91";
  }


//clear
document.getElementById("clearCart").addEventListener("click", () => {
  if (confirm("Törli a megrendelést?") == true) {
    alert("A kosár tartalma eltávolítva")
    kosar.innerHTML = " ";
    renderCart();
    ClearAll();
  } else {
    alert("A kosár tartalma nem lett eltávolítva")
  }

})

//submit
document.getElementById("submitCartItems").addEventListener("click", () => {
  alert("Sikeres megrendelés");
  kosar.innerHTML = " ";
  renderCart();
  ClearAll();d
})