
// 케러셀 슬라이더
const carouselInner = document.querySelector(".carousel-inner");

let carouselCase = "";

for(let s in slideCon_arr){
    carouselCase += `
        <div class="carousel-item">
                <img src="./img/${slideCon_arr[s][0]}" class="d-block w-100" alt="${slideCon_arr[s][2]}">
            <div class="txt">
                <h3>${slideCon_arr[s][1]}</h3>
                <h4>${slideCon_arr[s][2]}</h4>
                <p>${slideCon_arr[s][3]}</p>
            <a href="./">more</a>
        </div>
        </div>
    `;
}

carouselInner.innerHTML = carouselCase;
carouselInner.querySelector(".carousel-item:nth-child(1)").classList.add("active");



const pauseBtn = document.querySelector("#carouselExampleControls .pause");
const carousel_sel = document.querySelector("#carouselExampleControls");



// 동작x
pauseBtn.addEventListener('click', ()=>{
    const classChk = pauseBtn.classList.contains("pause");
    if(classChk){
        pauseBtn.classList.remove("pause");
        pauseBtn.setAttribute('src', './img/btn_play.png')
        carousel_sel.setAttribute('data-bs-interval', "0");
        
    }else if(!classChk){
        pauseBtn.classList.add("pause");
        pauseBtn.setAttribute('src', './img/btn_stop.png')
        carousel_sel.setAttribute('data-bs-interval', "3000");
    }
});
    

//business

const businessCarousel_inner = document.querySelector("#businessCarousel .carousel-inner");
let businessCase = "";

for(let b in businessItem){
    businessCase += `
        <div class="carousel-item inner-item">
            <div class="itemInner">
                <a href="./" style="background-image:url(./img/${businessItem[b][0]})" class="innerImg_${parseInt(b) + 1}"></a>
                <p>${businessItem[b][1]}</p>
            </div>
        </div>
    `;
}
businessCarousel_inner.innerHTML = businessCase;
// console.log(businessCase);


const businessCarousel_sel = document.querySelector('#businessCarousel')
const businesscarousel = new bootstrap.Carousel(businessCarousel_sel, {
    interval: 5000,
    wrap: true,
    
});

businessCarousel_inner.querySelector(".carousel-item:nth-child(1)").classList.add("active");




//마우스오버

const aTag = document.querySelectorAll("a");

for(let a of aTag){
    a.addEventListener('mouseover', ()=>{
        a.classList.add("hover");
    });
    a.addEventListener('mouseout', ()=>{
        a.classList.remove("hover");
    });
}

const imgBannerHover = document.querySelectorAll("#imgBanner .box");

for(let i of imgBannerHover){
    i.addEventListener('mouseover', ()=>{
        i.classList.add("hover");
    });
    i.addEventListener('mouseout', ()=>{
        i.classList.remove("hover");
    });
}

const navLiSel = document.querySelectorAll("#menuBar .wrap nav ul li");

for(let i of navLiSel){
    i.addEventListener('mouseover', ()=>{
        i.classList.add("hover");
    });
    i.addEventListener('mouseout', ()=>{
        i.classList.remove("hover");
    });
};

// 비지니스 이미지 for문 실패
// const ourBusinessImgOn = document.querySelectorAll("#businessCarousel .inner-item .itemInner a");

// for(let i of ourBusinessImgOn){
//     i.addEventListener('mouseover', ()=>{
//         for(let o in businessItemOnOff){
//             i.style.backgroundImage = `url(./img/${businessItemOnOff[o][0]})`
//             console.log(o);
//         }
//     });
// };


const businessInnerImg1 = document.querySelector(".innerImg_1");
const businessInnerImg2 = document.querySelector(".innerImg_2");
const businessInnerImg3 = document.querySelector(".innerImg_3");
const businessInnerImg4 = document.querySelector(".innerImg_4");

businessInnerImg1.addEventListener('mouseover', ()=>{
    businessInnerImg1.style.backgroundImage = `url(./img/${businessItemOnOff[0][0]})`
});
businessInnerImg1.addEventListener('mouseout', ()=>{
    businessInnerImg1.style.backgroundImage = `url(./img/${businessItemOnOff[0][1]})`
});

businessInnerImg2.addEventListener('mouseover', ()=>{
    businessInnerImg2.style.backgroundImage = `url(./img/${businessItemOnOff[1][0]})`
});
businessInnerImg2.addEventListener('mouseout', ()=>{
    businessInnerImg2.style.backgroundImage = `url(./img/${businessItemOnOff[1][1]})`
});

businessInnerImg3.addEventListener('mouseover', ()=>{
    businessInnerImg3.style.backgroundImage = `url(./img/${businessItemOnOff[2][0]})`
});
businessInnerImg3.addEventListener('mouseout', ()=>{
    businessInnerImg3.style.backgroundImage = `url(./img/${businessItemOnOff[2][1]})`
});

businessInnerImg4.addEventListener('mouseover', ()=>{
    businessInnerImg4.style.backgroundImage = `url(./img/${businessItemOnOff[3][0]})`
});
businessInnerImg4.addEventListener('mouseout', ()=>{
    businessInnerImg4.style.backgroundImage = `url(./img/${businessItemOnOff[3][1]})`
});



