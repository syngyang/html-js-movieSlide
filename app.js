const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value -300
            }px)`
        } else {
            movieLists[i].style.transform = "translateX(0)";
            counterCounter = 0;
        }
    })
})


console.log(window.innerWidth);

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".content-container,.movie-list-title, .navbar-wrapper, .sidebar, .left-menu-icon, .toggle-box "
);

ball.addEventListener("click", ()=>{
    items.forEach((item)=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})