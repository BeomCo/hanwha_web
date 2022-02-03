const typeCarouselInner = document.querySelector("#typeCarousel .carousel-inner");

let typeCase = "";

for(let t in careersType){
    typeCase += `
        
        <li class="carousel-item">
            <div class="itemWrap">
                <div class="img" style="background-image:url(./img/careers/${careersType[t][0]})" alt="${careersType[t][2]}"></div>
                <div class="head">
                    <h5>${careersType[t][1]}</h5>
                    <h3>${careersType[t][2]}</h3>
                </div>
                <div class="body">
                    <h4>${careersType[t][3]}</h4>
                    <p>${careersType[t][4]}</p>
                </div>
            </div>
        </li>

    `
};

typeCarouselInner.innerHTML = typeCase;
typeCarouselInner.querySelector(".carousel-item:nth-child(1)").classList.add("active");

const typeCarousel_sel = document.querySelector('#typeCarousel')
const typeCarousel = new bootstrap.Carousel(typeCarousel_sel, {
    interval: 4000,
    wrap: true,
    
});

const developCarouselInner = document.querySelector("#developCarousel .carousel-inner");

let developCase = "";
let t2 = 1 * 2;
let t3 = 1 * 3;

for(let d in careersDevelopProgramTitle){
    developCase += `
    <div class="carousel-item">

        <div class="img">
            <div class="imgWrap">
                <div class="imgBox">
                <h4>${careersDevelopProgramTitle[d][1]}</h4>
            </div
        </div>

        <div class="txt">
            <div class="top">
                <h4>${careersDevelopProgram1[d][0]}</h4>
                <span class="btn">+</span>
            </div>
            <div class="bottom">
                <p>${careersDevelopProgram1[d][1]}</p>
                <p>${careersDevelopProgram1[d][2]}</p>
                <p>${careersDevelopProgram1[d][3]}</p>
                <p>${careersDevelopProgram1[d][4]}</p>
                <p>${careersDevelopProgram1[d][5]}</p>
                <p>${careersDevelopProgram1[d][6]}</p>
            </div>
        </div>

        <div class="txt">
            <div class="top">
                <h4>${careersDevelopProgram2[d][0]}</h4>
                <span class="btn">+</span>
            </div>
            <div class="bottom">
                <p>${careersDevelopProgram2[d][1]}</p>
                <p>${careersDevelopProgram2[d][2]}</p>
                <p>${careersDevelopProgram2[d][3]}</p>
                <p>${careersDevelopProgram2[d][4]}</p>
                <p>${careersDevelopProgram2[d][5]}</p>
                <p>${careersDevelopProgram2[d][6]}</p>
            </div>
        </div>
            
    </div>
    `
};

developCarouselInner.innerHTML = developCase;
developCarouselInner.querySelector(".carousel-item:nth-child(1)").classList.add("active");

const developCarousel_sel = document.querySelector('#developCarousel')
const developCarousel = new bootstrap.Carousel(developCarousel_sel, {
    interval: 4000,
    wrap: false,
    
});


const accoBtn = document.querySelectorAll(".btn");
// console.log(accoBtn);

for(let e of accoBtn){
    e.addEventListener('click', ()=>{
        const activeChk = e.closest(".txt").querySelector(".bottom").classList.contains("active");
        console.log(!activeChk)

        if(!activeChk){
            e.closest(".txt").querySelector(".bottom").classList.add("active");
            e.innerText = "-"
        }else{
            e.closest(".txt").querySelector(".bottom").classList.remove("active");
            e.innerText = "+"
        }
    });
};