function chageBG (color){
document.body.style.background = color;
let text = document.getElementsByClassName('text');
if(color == "black"){
    for(let elm of text){
        elm.style.color = "white";
    }
}
else{
    for(let elm of text){
        elm.style.color = "black";
    }
}

}