const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slider = document.getElementById('slider');
const sliderArray = document.getElementsByClassName('slider_image');
const dots = document.getElementsByClassName('dots');
let activeIndex = 0;


let dotsHTML = '';
// 画像の数だけドット表示
window.onload = function() {
  dotsHTML += '<div class="dots_wrap">';
  for (let i = 0; i < sliderArray.length; i++) {
    dotsHTML += '<button type="button" class="dots" data-number="'+i+'"></button>';
  }
  dotsHTML += '</div>';
  document.getElementById('dots').innerHTML = dotsHTML;
  dots[activeIndex].classList.add('active');// 1つ目のdotsに.active付与
};



sliderArray[activeIndex].classList.add('active');

function nextImage(e){
  sliderArray[activeIndex].classList.remove('active');
  dots[activeIndex].classList.remove('active');

  let sliderCount = sliderArray.length;
  if(e.target.id == 'prev') {
    activeIndex -= 1;
    if(activeIndex < 0) {
      activeIndex = sliderCount - 1;
    }
    
  }else if(e.target.id == 'next'){
    activeIndex += 1;
    if(activeIndex > sliderCount - 1) {
      activeIndex = 0;
    }
  }else if(e.target.className == 'dots'){
    let dataNumber = e.target.dataset.number;// ドットのdata属性取得
    sliderArray[activeIndex].classList.remove('active');
    sliderArray[dataNumber].classList.add('active');
    dots[activeIndex].classList.remove('active');
    dots[dataNumber].classList.add('active');
    console.log(dataNumber);
    activeIndex = dataNumber;
    return activeIndex;
  }else{

  }
  dots[activeIndex].classList.add('active');
  sliderArray[activeIndex].classList.add('active');
  console.log(activeIndex);
}

document.querySelector('#prev').addEventListener('click', nextImage);
document.querySelector('#next').addEventListener('click', nextImage);
document.querySelector('#dots').addEventListener('click', nextImage);
// const clickDots = document.getElementById('dots');


