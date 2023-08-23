let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active =items.length-3;
function loadshow(){
  
  let stt=0;
  items[active].style.transform = `none`
  items[active].style.filter='none'; 
 
  items[active].style.opacity = 1;
  for(var i = active+1; i<items.length;i++){
    stt++;  
    items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(20px) rotateY(-1deg)`
    items[i].style.filter='blur(5px)';
    items[i].style.zIndex +stt; 
    items[i].style.opacity = stt>2 ? 0 : 0.3;
  }
  stt=0;
  for(var i = active - 1;i>=0;i--){
    stt++;
    items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(20px) rotateY(1deg)`
    items[i].style.filter='blur(5px)';
    items[i].style.zIndex -stt;   
    items[i].style.opacity = stt>2 ? 0 : 0.6;
  }
}
loadshow()
next.onclick = function(){
  active = active + 1 < items.length ? active + 1 :active;
  loadshow()
}
prev.onclick = function(){
  active = active - 1 >=0  ? active - 1 :active;
  loadshow()
}