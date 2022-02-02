//grantCarousel

const grantCarouselInner = document.querySelector("#grantCarousel .carousel-inner");

let grantCase = "";

for(let g in grantItem){
    grantCase += `
        <div class="carousel-item">
            <div class="txt">
                <h3>${grantItem[g][1]}</h3>
                <div class="line"></div>
                <p>${grantItem[g][2]}</p>
            </div>
            <div class="img" style="background-image:url(./img/prcenter/${grantItem[g][0]}">
            </div>
        </div>
    `
};

grantCarouselInner.innerHTML = grantCase;
grantCarouselInner.querySelector(".carousel-item:nth-child(1)").classList.add("active");

const grantCarousel_sel = document.querySelector('#grantCarousel')
const grantCarousel = new bootstrap.Carousel(grantCarousel_sel, {
    interval: 3000,
    wrap: true,
    
});