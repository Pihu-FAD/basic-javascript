let FullImgBox = document.getElementById("FullImgBox");
let FullImg = document.getElementById("FullImg");


function OpenFullImg(pic){
    FullImgBox.style.display = "flex";
    FullImg.src = pic;

}
function CloseFullImg(){
    FullImgBox.style.display = "none";
}