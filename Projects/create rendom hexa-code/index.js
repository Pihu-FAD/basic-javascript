const colors = document.querySelectorAll('.color-box h2');
function generateColors(){
colors.forEach((color)=>{
let hexa = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
color.style.backgroundColor  = hexa;
color.innerHTML = hexa;
});

}
generateColors();



