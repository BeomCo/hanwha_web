//header

const headerSel = document.querySelector("header");
const headerHtml = `
        <div id="menuBar">

            <div class="wrap">

                <div class="logo">
                    <a href="./">
                        <img src="./img/logo.png" alt="Hanwha Logo"></a>
                    </div>
                    <nav class="nav"></nav>
                    <div class="side">
                        <div class="lang">
                            <a class="kr" href="./"></a>
                            <a class="en" href="./"></a>
                        </div>
                        <div class="menu"></div>
                    </div>

                </div>

            </div>

            <div id="slideMenu">

                <div class="wrap">
                    <div class="logo">
                        <a href="./">
                            <img src="./img/logo.png" alt="Hanwha Logo"></a>
                        </div>
                        <nav class="nav slideNav"></nav>
                        <div class="side">
                            <div class="menu"></div>
                        </div>
                    </div>

                </div>
`;

headerSel.innerHTML = headerHtml;


//footer

const footerSel = document.querySelector("footer");
const footerHtml = `
<div class="wrap">
    <div class="cont">
        <div class="logo">
            <a href="./">
                <img src="./img/footer_logo.png" alt=""></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="./">해외현장 임직원가족</a>
                    </li>
                    <li>
                        <a href="./">개인정보 처리방침</a>
                    </li>
                    <li>
                        <a href="./">공정거래 사업지침</a>
                    </li>
                    <li>
                        <a href="./">협력업체 시스템</a>
                    </li>
                </ul>
                <div class="info">
                    <address>서울시 영등포구 여의대로 24 전경련회관</address>
                    <div class="tel">
                        <span>TEL
                        </span>
                        <a href="tel:02255600">02.2055.6000</a>
                        <span>
                            /
                        </span>
                        <a href="tel:0807292400">080.729.2400</a>
                    </div>
                    <p>Copyright 2022 Hanwha Engineering & Construction corp.</p>
                </div>
            </nav>
            <div class="link">
                <ul>
                    <li>
                        <a href="./" class="youtube"></a>
                    </li>
                    <li>
                        <a href="./" class="facebook"></a>
                    </li>
                    <li>
                        <a href="./" class="instagram"></a>
                    </li>
                    <li>
                        <a href="./" class="blog"></a>
                    </li>
                </ul>
                <div class="family">
                    <img src="./img/site_body.jpg" alt="family site" class="body" height="360px">
                        <img
                            src="./img/site_head.jpg"
                            alt="family site"
                            style="height: 28px"
                            class="head"></div>
                    </div>

                </div>
            </div>
`;

footerSel.innerHTML = footerHtml;


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
    };
};

menuIcon.addEventListener('click', ()=>{
    slideMenu_main();
});


//캐러셀 반응형
const width = ()=>{
    return innerWidth;
}
const carouselBtnSel = document.querySelectorAll(".carouselBtn button");
const carouselBtnImgSel = document.querySelectorAll(".carouselBtn img");
const carouselControl = {
    deactive : ()=>{
        const innerItemSel = document.querySelectorAll(".inner-item");
        for(let cc of innerItemSel){
            cc.classList.remove("carousel-item");
        };
        for(let ci of carouselBtnImgSel){
            ci.style.display = "none";
        };
        for(let cb of carouselBtnSel){
            cb.style.display = "none";
        };
    },
    active : ()=>{
        const innerItemSel = document.querySelectorAll(".inner-item");
        for(let cc of innerItemSel){
            cc.classList.add("carousel-item");
        }
        for(let ci of carouselBtnImgSel){
            ci.style.display = "block";
        };
        for(let cb of carouselBtnSel){
            cb.style.display = "block";
        };
    },
};

addEventListener('resize', ()=>{
    if(width() >= 768){
        carouselControl.deactive();
    }else if(width() < 768){
        carouselControl.active();
    }
});
addEventListener('load', ()=>{
    if(width() >= 768){
        carouselControl.deactive();
    }else if(width() < 768){
        carouselControl.active();
    }
});