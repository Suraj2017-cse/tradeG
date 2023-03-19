
document.querySelector(".fa-bars").addEventListener('click', () => {
    document.querySelector(".item").classList.add("show")
})

document.querySelector(".fa-xmark").addEventListener("click", () => {
    document.querySelector(".item").classList.remove("show")
})

