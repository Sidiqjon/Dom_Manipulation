
const cars = JSON.parse(localStorage.getItem("cars") ) || []

function renderCarData(data){
    const wrapperEl = document.querySelector(".wrapper")
    const fragment = document.createDocumentFragment()
    wrapperEl.innerHTML = null
    
    data.forEach((car)=>{
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class="card__image"></div>
            <h3>${car.name}</h3>
            <p>${car.brand}</p>
            <p>${car.price} USD</p>
            <p>${car.color}</p>
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
    const [name, brand, price, color, isNew] = formEl.children
    let newCar = {
        id: new Date().getTime(),
        name: name.value,
        brand: brand.value,
        price: Number(price.value),
        color: color.value,
        isNew: isNew.checked
    }
    cars.push(newCar)
    localStorage.setItem("cars", JSON.stringify(cars))
    renderCarData(cars)
    name.value = ""
    brand.value = ""
    price.value = ""
    color.value = ""
    isNew.checked = false
})











// localStorage.setItem("ism", "Laylo")
// localStorage.setItem("age", "19")
// localStorage.removeItem("age")

console.log( localStorage.getItem("ism") );







/**
 * for only form
 * 
 * submit
 */



// const countEl = document.querySelector(".count span")
const btnEl = document.querySelector(".btn")


// let offset = 0

// function inc (){
//     offset++
//     countEl.textContent = offset
// }

/**
 * for all elements
 * 
 * click
 * dblclick
 * mouseenter
 * mouseleave
 * mousemove
 * ...
 */

// btnEl.addEventListener("click", (event)=>{
//     console.log( event.target );
    
//     inc()
//     console.log("click");
// })
// btnEl.addEventListener("dblclick", (event)=>{
//     console.log("dblclick");
// })
// btnEl.addEventListener("mouseenter", (event)=>{
//     console.log("mouseenter");
// })
// btnEl.addEventListener("mouseleave", (event)=>{
//     console.log("mouseleave");
//     window.location.reload()
// })

// /**
//  * for only input
//  * 
//  * focus
//  * blur
//  * keyup
//  * ...
//  */
// const inpEl = document.querySelector(".inp")

// inpEl.addEventListener("focus", (e)=>{
//     console.log(e.target);
    
//     console.log("focus");
// })
// inpEl.addEventListener("blur", (e)=>{
//     console.log("blur");
// })
// inpEl.addEventListener("keyup", (e)=>{
//     console.log(e.target.value);
//     console.log("keyup");
// })

// // document.addEventListener("click", (e)=>{
// //     console.log(e.target);
// // })


// /**
//  * load
//  * scroll
//  */

// window.addEventListener("scroll", ()=>{
//     console.log(document.documentElement.scrollTop);
// })
