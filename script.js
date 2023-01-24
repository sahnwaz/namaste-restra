// JavaScript Namaste

//Start Menu Tabs-------------------------------------------------------------------
function loop_here(aa) {
    let mtc = document.querySelectorAll(".menu-tab-content");
    let mti = document.querySelectorAll(".menu-tab-item"); 
    for (let i = 0; i < aa; i++) 
    {mtc[i].style.display = "none"; mti[i].classList.remove("menu_active");}
}

//Start Event Delegation----------------------------------------------------------------------

document.querySelector(".menu-tabs").addEventListener('click', function(evnt) {
    if(evnt.target.id === "id_btn1") { 
        loop_here(5);
        document.getElementById("allday").style.display = "flex";
        document.getElementById("id_btn1").classList.add("menu_active");}

    else if (evnt.target.id === "id_btn2"){
        loop_here(5); 
        document.getElementById("lunch").style.display = "flex";
        document.getElementById("id_btn2").classList.add("menu_active"); 
    }

    else if (evnt.target.id === "id_btn3"){
        loop_here(5);
        document.getElementById("chinese").style.display = "flex";
        document.getElementById("id_btn3").classList.add("menu_active");  
    }

    else if (evnt.target.id === "id_btn4"){
        loop_here(5);
        document.getElementById("beverage").style.display = "flex";
        document.getElementById("id_btn4").classList.add("menu_active");  
    }

    else if (evnt.target.id === "id_btn5"){
        loop_here(5);
        document.getElementById("desserts").style.display = "flex";
        document.getElementById("id_btn5").classList.add("menu_active");
    }
}
)

//Start Nav Bar Code Here
// toggle navbar
const navToggler = document.querySelector(".nav_btn");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler.classList.toggle("nav_active");
    document.querySelector(".nav_side").classList.toggle("open");
    document.getElementById("menu_icon").classList.toggle("fa-xmark");
}

// close nav when clicking on a nav menu item
    document.addEventListener("click", function(e) {if(e.target.closest(".nav_li")) 
    { toggleNav(); }})
 
//Hide Nav Bar on Scroll down 
window.onscroll = function() {nav_bar();}
// Function Created
function nav_bar(){
if (window.pageYOffset >= 700) 
{document.querySelector("#logo_img").style.display = "none";}
else
{document.querySelector("#logo_img").style.display = "block";}
}
//End New Nav Bar Code Here

document.body.scrollTop = document.documentElement.scrollTop = 0;




