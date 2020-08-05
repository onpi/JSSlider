const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slider = document.getElementById('slider');
const sliderArray = document.getElementsByClassName('slider_image');
let activeIndex = 0;

sliderArray[activeIndex].classList.add('active');

function nextImage(e){
  sliderArray[activeIndex].classList.remove('active');
  let sliderCount = sliderArray.length;
  if(e.target.id == 'prev') {
    activeIndex -= 1;
    if(activeIndex < 0) {
      activeIndex = sliderCount - 1;
    }
  }else {
    activeIndex += 1;
    if(activeIndex > sliderCount - 1) {
      activeIndex = 0;
    }
  }
  sliderArray[activeIndex].classList.add('active');
}

document.querySelector('#prev').addEventListener('click', nextImage);
document.querySelector('#next').addEventListener('click', nextImage);
