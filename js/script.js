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

// 케러셀 슬라이더
const carouselInner = document.querySelector(".carousel-inner");

let carouselCase = "";

for(let s in slideCon_arr){
    carouselCase += `
        <div class="carousel-item">
            <img src="./img/${slideCon_arr[s][0]}" class="d-block w-100" alt="${slideCon_arr[s][2]}">
        </div>
    `;
}

carouselInner.innerHTML = carouselCase;
carouselInner.querySelector(".carousel-item:nth-child(1)").classList.add("active");


//business

const businessCarousel_inner = document.querySelector("#businessCarousel .carousel-inner");
let businessCase = "";

for(let b in businessItem){
    businessCase += `
        <div class="carousel-item">
            <div class="itemInner">
                <a href="./" style="background-image:url(./img/${businessItem[b][0]})"></a>
                <p>${businessItem[b][1]}</p>
            </div>
        </div>
    `;
}
businessCarousel_inner.innerHTML = businessCase;
console.log(businessCase)


const businessCarousel_sel = document.querySelector('#businessCarousel')
const businesscarousel = new bootstrap.Carousel(businessCarousel_sel, {
    interval: 5000,
    // wrap: false,
    
});

businessCarousel_inner.querySelector(".carousel-item:nth-child(1)").classList.add("active");

