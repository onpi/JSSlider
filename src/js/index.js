const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slider = document.getElementById('slider');
const sliderArray = document.getElementsByClassName('slider_image');
const dots = document.getElementsByClassName('dots');
let activeIndex = 0;


let dotsHTML = '';
// 画像の数だけドット表示
window.onload = function() {
  sliderArray[activeIndex].classList.add('active');
  dotsHTML += '<div class="dots_wrap">';
  for (let i = 0; i < sliderArray.length; i++) {
    dotsHTML += '<button type="button" class="dots" data-number="'+i+'"></button>';
  }
  dotsHTML += '</div>';
  document.getElementById('dots').innerHTML = dotsHTML;
  dots[activeIndex].classList.add('active');// 1つ目のdotsに.active付与
};

function nextImage(e){
  sliderArray[activeIndex].classList.remove('active');
  dots[activeIndex].classList.remove('active');
  let dataNumber = e.target.dataset.number;// ドットのdata属性取得
  let sliderCount = sliderArray.length;
  activeIndex = activeIndex;
  if(e.target.className === 'dots'){
    // スライダー切り替え
    sliderArray[activeIndex].classList.remove('active');
    sliderArray[dataNumber].classList.add('active');
    // ドット切り替え
    dots[activeIndex].classList.remove('active');
    dots[dataNumber].classList.add('active');
    // console.log(dataNumber);
    activeIndex = dataNumber;
    // return activeIndex;
  }else if(e.target.id === 'prev') {
    activeIndex --;
    if(activeIndex < 0) {
      activeIndex = sliderCount - 1;
    }
  }else if(e.target.id === 'next'){
    activeIndex ++;
    if(activeIndex > sliderCount - 1) {
      activeIndex = 0;
    }
  }

  dots[activeIndex].classList.add('active');
  sliderArray[activeIndex].classList.add('active');
}

document.querySelector('#prev').addEventListener('click', nextImage);
document.querySelector('#next').addEventListener('click', nextImage);
document.querySelector('#dots').addEventListener('click', nextImage);


