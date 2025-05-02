const layoutEl = document.querySelector(".layout")
const form = document.querySelector(".form")
const addCarEl = document.querySelector(".addcarbtn")
const closeModal = document.querySelector(".close-btn")


const cars = JSON.parse(localStorage.getItem("cars") ) || []

function renderCarData(data){
    const wrapperEl = document.querySelector(".wrapper")
    const fragment = document.createDocumentFragment()
    wrapperEl.innerHTML = null
    
    data.forEach((car)=>{
        let card = document.createElement("div")
        card.className = "car__card"
        card.innerHTML = `
            <div class="car__image"></div>
            <h3>${car.name}</h3>
            <p><span>Brand: </span>${car.brand}</p>
            <p><span>Price: </span>${car.price} <span>$</span></p>
            <p><span>Color: </span>${car.color}</p>
            <p>${car.isNew}</p>
        `
        fragment.appendChild(card)
    })

    wrapperEl.appendChild(fragment)
}

window.onload = ()=>{
    renderCarData(cars)
}

const formEl = document.querySelector(".form")

formEl.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nameInput = formEl.querySelector('input[placeholder="Name..."]');
    const brandInput = formEl.querySelector('input[placeholder="Brand..."]');
    const priceInput = formEl.querySelector('input[placeholder="Price..."]');
    const colorInput = formEl.querySelector('input[placeholder="Color..."]');
    const isNewCheckbox = formEl.querySelector('#carCheck');
  
    const carCondition = isNewCheckbox.checked ? "Brand New Car" : "Lightly Driven";

    
    let newCar = {
        id: new Date().getTime(),
        name: nameInput.value,
        brand: brandInput.value,
        price: Number(priceInput.value),
        color: colorInput.value,
        isNew: carCondition
    }
    cars.push(newCar)
    localStorage.setItem("cars", JSON.stringify(cars))
    renderCarData(cars)

    nameInput.value = "";
    brandInput.value = "";
    priceInput.value = "";
    colorInput.value = "";
    isNewCheckbox.checked = false;
    layoutEl.style.display = "none";
})


layoutEl.addEventListener("click", ()=>{
    layoutEl.style.display="none"
})

form.addEventListener("click", (e)=>{
    e.stopPropagation()
})

addCarEl.addEventListener("click", (e)=>{
    layoutEl.style.display="flex"
})

closeModal.addEventListener("click", (e)=>{
    layoutEl.style.display="none"
})