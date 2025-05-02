const BASE_URL = "https://dummyjson.com/"

function renderUserData(data){

    const wrapperEl = document.querySelector(".wrapper")
    const fragment = document.createDocumentFragment()
    wrapperEl.innerHTML = null
    
    data.users.forEach((user)=>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
            <div class="card__image">
                <img src="${user.image}" alt="">
            </div>
            <h3>Name:${user.firstName}</h3>
            <p>Country:${user.address.country}</p>
        `
        fragment.appendChild(card)
    })

    wrapperEl.appendChild(fragment)

}

function fetchData(endpoint){
    fetch(`${BASE_URL}${endpoint}`)
        .then((res) => {
            if(!res.ok){
                throw new Error("something went wrong while fetching users!")
            }            
            return res.json()
        })
        .then((data) => {
            renderUserData(data);
        })
        .catch((err)=>{
            console.log(err);
        })
}

// window.onload = ()=>{}
window.addEventListener("load", ()=>{
    fetchData("users")
})
