const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slider = document.getElementById('slider');
const sliderArray = document.getElementsByClassName('slider_image');
let activeIndex = 0;

sliderArray[activeIndex].classList.add('active');

function nextImage(){
  sliderArray[activeIndex].classList.remove('active');
  if(activeIndex >= sliderArray.length - 1){
    activeIndex = 0;
  }else{
    activeIndex += 1;  
  }
  sliderArray[activeIndex].classList.add('active');
}

document.querySelector('#prev').addEventListener('click', nextImage);
document.querySelector('#next').addEventListener('click', nextImage);
