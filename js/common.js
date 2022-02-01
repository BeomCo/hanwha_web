// 메뉴 innerHTML

const navHtml = document.querySelector(".nav");
const subNavHtml = document.querySelector(".slideNav");

navHtml.innerHTML = navHtmlSource;
subNavHtml.innerHTML = navHtmlSource;


// 메뉴 슬라이더
const menuIcon = document.querySelector(".menu");
const slideMenu = document.querySelector("#slideMenu");

function slideMenu_main(){
    let chk = slideMenu.classList.contains("active");
    if(!chk){
        slideMenu.classList.add("active");
    }else{
        slideMenu.classList.remove("active");
    }
}

menuIcon.addEventListener('click', ()=>{
    slideMenu_main();
})
