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