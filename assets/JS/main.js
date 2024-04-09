let inputFood = document.getElementById("input-food");
let inputBtn = document.getElementById("input-button");
let foodContainer = document.getElementById("food-container");

inputBtn.addEventListener("click", () =>{
    foodContainer.innerHTML += `<li class="food-item"> ${inputFood.value.toUpperCase()} </li>`;
})

//get elementByClassName