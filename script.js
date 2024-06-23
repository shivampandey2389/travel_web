
let slideIndex=0;
showSlides();
function showSlides(){
  let slide = document.getElementsByClassName("MySlide");
  let dot = document.getElementsByClassName("dot");
  let i;
  for(i=0;i<slide.length;i++){
    slide[i].style.display="none";
  }
  slideIndex++;
  if(slideIndex>slide.length){slideIndex=1};
  for (let i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active","");
  }
  slide[slideIndex-1].style.display="block";
  dot[slideIndex-1].className +=" active";
  setTimeout(showSlides,2000);2
}
let header = document.querySelector(".top-nav");
let header_opt="header-opt";
window.addEventListener("scroll",()=>{
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add( header_opt);
  } else {
    header.classList.remove( header_opt);
  }
})
function left(){
document.querySelector(".trl-des").scrollLeft +=-120;
}
function right(){
document.querySelector(".trl-des").scrollLeft +=230;
}
function left1(){
document.querySelector(".scroll-x").scrollLeft +=-370;
}
function right1(){
document.querySelector(".scroll-x").scrollLeft +=370;
}
function Bank(n){
let need = document.querySelectorAll(".Bank");
let general = document.querySelectorAll(".general")
for(let i=0;i<need.length;i++){
 if(i==n){
  need[i].classList.add("blue-opt","color-opt");
  general[i].classList.remove("hide");
  general[i].classList.add("scroll-x");
 }else{
  need[i].classList.remove("blue-opt","color-opt");
  general[i].classList.add("hide");
  general[i].classList.remove("scroll-x");
 }
}
}
function view(){
  let gen =document.querySelectorAll(".general");
  for (let i = 0; i < gen.length; i++) {
    if(i==0){
      continue;
    }
    gen[i].classList.toggle("hide");
    gen[i].classList.toggle("scroll-x");
  }
}
let search = document.querySelector("input");
search.addEventListener("click",()=>{
  document.querySelector("main").classList.toggle("fade-1");
  document.querySelector(".search").classList.toggle("width");
})