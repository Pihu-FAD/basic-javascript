// div
let x = document.createElement("div");
document.body.append(x);

// header
x.id = "header";

// navbar
let nav = document.createElement("nav");
x.appendChild(nav);
nav.style.display = "flex";
nav.style.justifyContent = "space-around";
nav.style.background = "blue";
nav.style.alignItems = "center";


let arr = ['nav-logo','nav-link','search','button'];
for(let i = 0; i<4; i++){
   let div =  document.createElement("div");
   div.id = arr[i];
   nav.appendChild(div);
   if(div.id=='nav-logo'){
    let image = document.createElement("img");
    div.appendChild(image);
    image.src = "../images/myntra-2709168-2249158.webp";
    image.style.width = "50px";
   }


   else if (div.id=='nav-link'){
    let arr = ['MEN','WOMEN','KIDS','FASHION AND DESIGNING','BEAUTY','STUDIO']
    
    for(let j =0; j<6; j++){
      let li =  document.createElement("li");
      div.appendChild(li);
      li.textContent = arr[j];
      li.style.listStyle = "none";
      div.style.display = "flex";
    div.style.gap = "20px";
    li.style.padding = "10px",0;

    }
}
    else if (div.id == 'search'){
       let input =  document.createElement("input");
       div.appendChild(input);
       input.type = "search";
       input.placeholder = "search Products here";
       input.style.width = "120%";
       input.style.padding ="5px",0;
       input.style.margin = "5px",0;
    }
   
    else if (div.id == "button"){
        let arr = ['profile','wishlist','bag']
        for(let j =0; j<3;j++){
            let button = document.createElement("button");
            div.appendChild(button);
            button.textContent = arr[j];
            button.style.margin = "5px";
            button.style.padding = "5px";
        }
    }
}