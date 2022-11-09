const sidebarToggle = document.querySelector("#btn");
const sidebarMenu = document.querySelector("#sidebarMenu");

const sidebarOverlay = document.querySelector("#overlay");

const alart = document.querySelector('#alart');
const logoutToggle = document.querySelector('#logedOut');





function sidebarShow() {
    sidebarMenu.classList.add("active");
    sidebarOverlay.classList.add("active");
}

function sidebarHide() {
    sidebarMenu.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    sidebarOverlay.style.transition = "all 1s ease 0.5s";
}


function alartShow(){
    alart.classList.add("active");
    console.log('show alart');
}

function alarthide(){
    alart.classList.remove("active");
}



sidebarToggle.addEventListener("click", (e) => {
    sidebarShow();
})

sidebarOverlay.addEventListener("click", (e) => {
    sidebarHide();
    alarthide();
})


logoutToggle.addEventListener("click", (e) => {
    alartShow();
})



