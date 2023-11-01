const btn = document.querySelector(".btn")
const element = document.querySelector(".element")
function handleClick(id, event){
    element.classList.add("close")
    console.log(element.getAttribute("class"));
}
const id = 1
btn.addEventListener("click", (event) => handleClick(id, event))