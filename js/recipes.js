const BASE_URL = "https://dummyjson.com/"

function renderRecipeData(data){

    const wrapperEl = document.querySelector(".wrapper")
    const fragment = document.createDocumentFragment()
    wrapperEl.innerHTML = null
    
    data.recipes.forEach((recipe)=>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
            <div class="card__image">
                <img src="${recipe.image}" alt="">
            </div>
            <h3>${recipe.name}</h3>
            <p>Cuisine:${recipe.cuisine}</p>
        `
        fragment.appendChild(card)
    })

    wrapperEl.appendChild(fragment)

}

function fetchData(endpoint){
    fetch(`${BASE_URL}${endpoint}`)
        .then((res) => {
            if(!res.ok){
                throw new Error("something went wrong while fetching recipes!")
            }            
            return res.json()
        })
        .then((data) => {
            renderRecipeData(data);
        })
        .catch((err)=>{
            console.log(err);
        })
}

// window.onload = ()=>{}
window.addEventListener("load", ()=>{
    fetchData("recipes")
})
