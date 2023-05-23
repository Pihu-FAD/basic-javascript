 let x = document.createElement("div");
document.body.append(x);
x.id = "header";

let nav = document.createElement("nav");
x.appendChild(nav);
nav.style.display = "flex";
nav.style.justifyContent = "space-around";
nav.style.alignItems = "center";
nav.style.background = "blue";


let arr =['nav-logo','nav-links','search','button'];
for(let i =0; i<4; i++){
   let div = document.createElement("div");
   div.id = arr[i]
   nav.appendChild(div);

   if(div.id=='nav-logo'){
    let image = document.createElement("img");
    div.appendChild(image);
    image.src = "../images/myntra-2709168-2249158.webp";
    image.style.width = "70px";
   }
   else if (div.id == 'nav-links'){
    let arr = ['MEN','WOMEN','KIDS','HOME&LIVING','BEAUTY','STUDIO'];
    div.style.display = "flex";
    div.style.gap = "20px";
    for(let j =0; j<6; j++){
        let li = document.createElement("li");
        div.appendChild(li);
        li.textContent = arr[j];
        li.style.listStyle = "none";
        li.style.padding = "10px",0;
        
    
    }
}

else if (div.id =='search'){
   let input = document.createElement("input");
   div.appendChild(input);
   input.type = "search";
   input.placeholder ="Search for products brands and more";
   input.style.padding = "10px",0;
   input.style.width = "120%";
   


   }
   else if(div.id == 'button'){
    
    let arr = ['profile','whishlist','bag'];
    for(let j= 0; j<3; j++){
        let button = document.createElement("button");
        div.appendChild(button);
        button.textContent = arr[j];
        button.style.padding = "5px";
        button.style.margin = "5px";
    }
   }
}
