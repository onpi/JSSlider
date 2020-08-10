const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slider = document.getElementById('slider');
const sliderArray = document.getElementsByClassName('slider_image');
const dots = document.getElementsByClassName('dots');
let activeIndex = 0;

sliderArray[activeIndex].classList.add('active');

function nextImage(e){
  sliderArray[activeIndex].classList.remove('active');
  let sliderCount = sliderArray.length;
  dots[activeIndex].classList.remove('active');
  if(e.target.id == 'prev') {
    activeIndex -= 1;
    dots[activeIndex].classList.add('active');
    if(activeIndex < 0) {
      activeIndex = sliderCount - 1;
      dots[activeIndex].classList.add('active');
    }
  }else {
    activeIndex += 1;
    dots[activeIndex].classList.add('active');
    if(activeIndex > sliderCount - 1) {
      activeIndex = 0;
      dots[activeIndex].classList.add('active');
    }
  }
  sliderArray[activeIndex].classList.add('active');
}

document.querySelector('#prev').addEventListener('click', nextImage);
document.querySelector('#next').addEventListener('click', nextImage);

let dotsHTML = '';
// 画像の数だけドット表示
window.onload = function() {
  dotsHTML += '<div class="dots_wrap">';
  for (let i = 0; i < sliderArray.length; i++) {
    dotsHTML += '<button type="button" class="dots"></button>';
  }
  dotsHTML += '</div>';
  document.getElementById('dots').innerHTML = dotsHTML;
  dots[activeIndex].classList.add('active');// 1つ目のdotsに.active付与
};
