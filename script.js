const menuBtn = document.querySelector("#menu-btn");
const menuCloseBtn = document.querySelector(".fa-solid");

const sideBar = document.querySelector("#sidebar");


menuBtn.addEventListener("click" , () => {
    sideBar.classList.add("show");
})

menuCloseBtn.addEventListener("click" , () => {
    sideBar.classList.remove("show");
})