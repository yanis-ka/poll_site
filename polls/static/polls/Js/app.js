// Homepage "animation"
const homepage = () => {
    const home = document.querySelector(".homepage")
    
    // console.log(home)
    
    if (home) {
        const body = document.querySelector("body")
        body.classList.remove("body")
        body.classList.add("home")
        body.classList.add("white")
    }
    
    // console.log(body)
}


// Appels de fonction
homepage()