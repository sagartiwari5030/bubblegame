
//  var box =document.querySelector("#box")
//  var btn= document.querySelector("button")

// var flag=0

//  btn.addEventListener("click",function(){
//     if(flag==0){
//         box.style.backgroundColor="yellow"
//         flag=1;
//     }else{
//         box.style.backgroundColor="transparent"
//         flag=0;
//     }
//  })
var gn="";
function makebuble(){
    var compute="";

 for( var i=1; i<=180; i++){
    var rn= Math.floor(Math.random()*10)
    compute +=   `<div class="buble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=compute;
}
var timer =60
function maketimer(){
   var timeint= setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector(".settimer").textContent=timer;
       }else{
        clearInterval(timeint);
       document.querySelector("#pbtm").innerHTML="<h1>Thanks Game Over</h1>"
   
        document.querySelector(".hits").innerHTML="0"
       }
    },1000)

}
function genratehit(){
     gn = Math.floor(Math.random()*10);
    document.querySelector(".hits").innerHTML=gn;
}
 var score=0;
function scoregenrate(){
    score += 10;
    document.querySelector(".getscore").textContent=score

}


document.querySelector("#pbtm").addEventListener("click",function(dets){
var clicknum =  Number(dets.target.textContent) 
if(clicknum ===gn){
    scoregenrate()
    makebuble()
    genratehit()
}
})



maketimer()
makebuble()
genratehit()
