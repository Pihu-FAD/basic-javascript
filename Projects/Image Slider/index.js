let slides = document.getElementsByClassName("slides");
let navlinks = document.getElementsByClassName("dot");
let currenSlide = 0;
document.getElementById("next").addEventListener("click",()=>{
    changeSlide(currenSlide+1);
});
document.getElementById("prev").addEventListener("click",()=>{
    changeSlide(currenSlide-1);
});
function changeSlide(moveTo){
    if(moveTo>=slides.length){
        moveTo =0;

    }
    if(moveTo <0){
        moveTo = slides.length-1;
    }
    slides[currenSlide].classList.toggle("active");
    navlinks[currenSlide].classList.toggle("ActiveDot");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("ActiveDot");
    currenSlide = moveTo;



}
document.querySelectorAll(".dot").forEach((bullet , bulletIndex)=>{
    bullet.addEventListener("click",()=>{
    if(currenSlide !== bulletIndex){
        changeSlide(bulletIndex);
    }
});
});
window.onload = setInterval(function(){
    changeSlide(currenSlide+1)

},3000);