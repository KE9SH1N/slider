const sidebarToggle = document.querySelector("#btn");
const sidebarMenu = document.querySelector("#sidebarMenu");

const sidebarOverlay = document.querySelector("#overlay");





function sidebarShow() {
    sidebarMenu.classList.add("active");
    sidebarOverlay.classList.add("active");
    console.log('show');
}

function sidebarHide() {
    sidebarMenu.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    console.log('hide')
}



sidebarToggle.addEventListener("click", (e) => {
    console.log("clicked");
    sidebarShow();
})

sidebarOverlay.addEventListener("click", (e) => {
    console.log('clicked');
    sidebarHide();
})


