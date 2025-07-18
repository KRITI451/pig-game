'use strict';
document.querySelector(".dice").style.display="none";
document.querySelector("#score--0").textContent=0;
document.querySelector("#score--1").textContent=0;
let random;
let activeplayer=0;
let numb;
let currentNum=0;
let p1=document.querySelector("#current--0");
let p2=document.querySelector("#current--1");
document.querySelector(".btn--roll").addEventListener("click",function(){
    random=Number(Math.trunc(Math.random()*6)+1);
    document.querySelector(".dice").src=`dice-${random}.png`;
    document.querySelector(".dice").style.display = "block";


if(random!==1){
    currentNum+=random;
    document.querySelector(`#current--${activeplayer}`).textContent=currentNum;
}
else{
    currentNum=0;
    document.querySelector(`#current--${activeplayer}`).textContent=currentNum;
  activeplayer=activeplayer===0?1:0;
}
})
document.querySelector(".btn--hold").addEventListener("click",function(){
    numb =Number(document.querySelector(`#score--${activeplayer}`).textContent);
   numb += currentNum;
document.querySelector(`#score--${activeplayer}`).textContent = numb;
document.querySelector(`#current--${activeplayer}`).textContent = 0;
currentNum = 0;

// ✅ WINNING CHECK BEFORE switching player
if (numb >= 20) {
  document.querySelector(`.player--${activeplayer}`).style.backgroundColor = "black";
  document.querySelector(`.player--${activeplayer}`).style.color = "white";
  document.querySelector(".btn--roll").disabled = true;
  document.querySelector(".btn--hold").disabled = true;
  return; // Stop further code
}

// ✅ Now switch only if no winner
activeplayer = activeplayer === 0 ? 1 : 0;
document.querySelector(".player--0").classList.toggle("player--active");
document.querySelector(".player--1").classList.toggle("player--active");
})
document.querySelector(".btn--new").addEventListener("click",function(){
    document.querySelector(`.player--${activeplayer}`).style.backgroundColor="pink";
    document.querySelector(`.player--${activeplayer}`).style.color = "black";
     activeplayer=0;
     currentNum=0;
     document.querySelectorAll(".current-score").forEach(el => {
        el.textContent = 0;
      });
      document.querySelectorAll(".player").forEach(player => {
        player.style.backgroundColor = "";
        player.style.color = "";
      });
    
    
      // Reset all total scores
      document.querySelectorAll(".score").forEach(el => {
        el.textContent = 0;
      });
      document.querySelector(`.player--${activeplayer}`).style.backgroundColor = "pink";
      // Reset dice
      document.querySelector(".dice").style.display = "none";
    
      // Reset active player class
      document.querySelector(".player--0").classList.add("player--active");
      document.querySelector(".player--1").classList.remove("player--active");
    
      // Enable buttons again if disabled
      document.querySelector(".btn--roll").disabled = false;
      document.querySelector(".btn--hold").disabled = false;
    });
   
