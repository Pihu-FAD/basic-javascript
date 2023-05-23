// array of truth
const arr1 = ['When was the last time yoy lied?', 'When was the last time you cried?', 'Whats your biggest fear?','Whats your biggest fantasy?', 'Do you have any fetishes?','What is something you are glad your mum doesnot about you?','Have you ever cheated on someone?','Whats the worst thing you have ever done?'];

//array of dare
const arr2 = ['Show the most embarrassing photo on your phone','Show the last five people you texted and what the messages said','Let the rest of the group DM someone from your Instagram account','Eat a raw piece of garlic','Do 100 squats','Keep three ice cubes in your mouth until they melt','Say something dirty to the person on your left','Give a foot massage to the person on your right'];


function truth(){
    let random = Math.floor(Math.random()*arr1.length);
    let print = arr1[random];
    document.getElementById("choices").innerHTML = print;
}
function daree(){
    
    let random = Math.floor(Math.random()*arr2.length);
    let print = arr2[random];
    document.getElementById("choices").innerHTML = print;
    console.log(random);
}