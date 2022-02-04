//project

const projectCarousel_inner = document.querySelector("#projectCarousel .carousel-inner");
let projectCase = "";

for(let p in projectItem){
    projectCase += `
        <div class="carousel-item inner-item">
            <div class="itemInner">
                <div class="img" style="background-image:url(./img/business/${projectItem[p][0]})"></div>
                <div class="cont">
                    <div class="txt">
                        <div class="txtWrap">
                            <div class="head">
                                <h3>${projectItem[p][1]}</h3>
                            </div>
                            
                            <div class="body">
                                <div class="top">
                                    <p>위치 <span>&nbsp${projectItem[p][2]}</span></p>
                                    <p>규모 <span>&nbsp${projectItem[p][3]}</span></p>
                                </div>
                                <div class="bottom">
                                    <p>기간 <span>&nbsp${projectItem[p][4]}</span></p>
                                    <p>발주처 <span class="placeOrder">&nbsp${projectItem[p][5]}</span></p>
                                </div>
                            </div>
                        </div>
                        <a href="./">자세히 보기</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}
projectCarousel_inner.innerHTML = projectCase;


const projectCarousel_sel = document.querySelector('#projectCarousel')
const projectCarousel = new bootstrap.Carousel(projectCarousel_sel, {
    // interval: 5000,
    wrap: true,
    
});

// const placeOrder = document.getElementsByClassName("placeOrder").textContent;
// const placeOrderChk = placeOrder.textContent;
// console.log(placeOrder);
// if()

projectCarousel_inner.querySelector(".carousel-item:nth-child(1)").classList.add("active");



//facility

const facility_inner = document.querySelector("#facility .outer .row");
let facilityCase = "";

for(let f in facilityItem){
    facilityCase += `
        <a href="" class="inner inner${parseInt(f) + 1}">
            <div class="innerWrap">
                <div class="head">
                    <h3 class="num">0${parseInt(f) + 1}</h3>
                    <h3 class="title">${facilityItem[f][1]}</h3>
                </div>
                <div class="body" style="background-image:url(./img/business/${facilityItem[f][0]})">
                    <p class="txt">${facilityItem[f][2]}</p>
                </div>
            </div>
        </a>
    `;
}
facility_inner.innerHTML = facilityCase;


//마우스오버

const aTag = document.querySelectorAll("a");

for(let a of aTag){
    a.addEventListener('mouseover', ()=>{
        a.classList.add("hover");
    });
    a.addEventListener('mouseout', ()=>{
        a.classList.remove("hover");
    })
}