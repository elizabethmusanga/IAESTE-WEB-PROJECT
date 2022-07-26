const navbar = document.querySelector("#nav");
const navBtn = document.querySelector(".logo-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

//add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

//drop-downs for footer
const dropButtons = document.querySelectorAll('.one');
const dropButtonsTwo = document.querySelectorAll('.two');
const dropButtonsThree = document.querySelectorAll('.three');
//return buttons
const returnButtonsOne = document.querySelectorAll('.lefts');
const returnButtonsTwo = document.querySelectorAll('.left-two');
const returnButtonsThree = document.querySelectorAll('.left-three');

const dropShows = document.querySelectorAll('.ones');
const dropShowsTwos = document.querySelectorAll('.twos');
const dropShowsThrees = document.querySelectorAll('.threes');

//for drop show one
for(const dropButton of dropButtons){
  dropButton.addEventListener('click', ()=>{
   for(const dropShow of dropShows){
     dropShow.style.display = 'block';
     dropButton.style.display = 'none';
     for(const returnButtonOne of returnButtonsOne){
       returnButtonOne.style.display = 'block';
     };
   };
  });
};
//for drop show two
for(const dropButtonTwo of dropButtonsTwo){
  dropButtonTwo.addEventListener('click', ()=>{
    for(const dropShowTwo of dropShowsTwos){
      dropShowTwo.style.display = 'block';
      dropButtonTwo.style.display ='none';
      for(const returnButtonTwo of returnButtonsTwo){
        returnButtonTwo.style.display = 'block';
      };
    };
  });
};
//for drop show three
for(const dropButtonThree of dropButtonsThree){
  dropButtonThree.addEventListener('click', ()=>{
    for(const dropShowThree of dropShowsThrees){
      dropShowThree.style.display = 'block';
      dropButtonThree.style.display = 'none';
    };
    for(const returnButtonThree of returnButtonsThree){
      returnButtonThree.style.display = 'block';
    }
  });
};
//back drop
for(const returnButtonOne of returnButtonsOne){
  returnButtonOne.addEventListener('click', ()=>{
    for(const dropShow of dropShows){
      dropShow.style.display = "none";
      returnButtonOne.style.display = 'none';
    }
    for(const dropButton of dropButtons){
      dropButton.style.display = 'block';
    };
  });
};
for(const returnButtonTwo of returnButtonsTwo){
  returnButtonTwo.addEventListener('click', ()=>{
    for(const dropShowTwo of dropShowsTwos){
      dropShowTwo.style.display = 'none';
      returnButtonTwo.style.display = 'none';
    };
    for(const dropButtonTwo of dropButtonsTwo){
      dropButtonTwo.style.display = 'block';
    };
  });
};
for(const returnButtonThree of returnButtonsThree){
  returnButtonThree.addEventListener('click', ()=>{
    for(const dropShowThree of dropShowsThrees){
      dropShowThree.style.display = 'none';
      returnButtonThree.style.display = 'none';
    };
    for(const dropButtonThree of dropButtonsThree){
      dropButtonThree.style.display = 'block';
    };
  });
};


//slider show
const slider = document.querySelector('.slider');
const studentSlider = document.querySelector('.intern-slider');
const homeSlider = document.querySelector('.about-ending-slider');


const leftArrows = document.querySelectorAll('.left');
const rightArrows = document.querySelectorAll('.right');

const internLeftArrow = document.querySelector('.leftb');
const internRightArrow = document.querySelector('.rightb');

const homeLeftArrows = document.querySelectorAll('.arrow-left');
const homeRightArrows = document.querySelectorAll('.arrow-right');



let sectionIndex = 0;

//home courasel
for(const homeLeftArrow of homeLeftArrows){
  homeLeftArrow.addEventListener('click', ()=>{
  sectionIndex = (sectionIndex > 0) ? -1: -1;
  homeSlider.style.transform = 'translate('+ (sectionIndex) * -50 +'%)';
});
};

for(const homeRightArrow of homeRightArrows){
  homeRightArrow.addEventListener('click', ()=>{
    sectionIndex = (sectionIndex < 1) ? sectionIndex +1 : 0;
    homeSlider.style.transform = 'translate('+ (sectionIndex) * -50 +'%)';
  });
};

const testimonialSlider = document.querySelector('.testimonials-section');
const leftTestButton = document.querySelector('.test-left');
const rightTestButton = document.querySelector('.test-right');

leftTestButton.addEventListener('click', ()=>{
  sectionIndex = (sectionIndex > 0) ? sectionIndex -1: 1;
  testimonialSlider.style.transform = 'translate('+ (sectionIndex) * -40 +'%)';
})

rightTestButton.addEventListener('click', ()=>{
  sectionIndex = (sectionIndex < 1) ? sectionIndex +1: 0;
  testimonialSlider.style.transform = 'translate('+ (sectionIndex) * -40 +'%)';
});

const leftButtonMobile = document.querySelector('.test-left-m');
const rightButtonMobile = document.querySelector('.test-right-m');

leftButtonMobile.addEventListener('click', ()=>{
  sectionIndex = (sectionIndex > 0) ? sectionIndex -1: 3;
  testimonialSlider.style.transform = 'translate('+ (sectionIndex) * -95 +'%)';
})

rightButtonMobile.addEventListener('click', ()=>{
  sectionIndex = (sectionIndex < 3) ? sectionIndex +1: 0;
  testimonialSlider.style.transform = 'translate('+ (sectionIndex) * -95 +'%)';
})
//local committes courasel
for(const leftArrow of leftArrows){
  leftArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex > 0) ? sectionIndex -1 : 3;
  slider.style.transform = 'translate('+ (sectionIndex) * -25 +'%)';
});
};

for(const rightArrow of rightArrows){
  rightArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex < 3) ? sectionIndex +1 :0;
  slider.style.transform='translate('+ (sectionIndex) * -25 +'%)';
});
};

//students intern courasel
internLeftArrow.addEventListener('click', (e)=>{
  sectionIndex = (sectionIndex > 0) ? sectionIndex -1: 2;
  studentSlider.style.transform = 'translate('+ (sectionIndex) * -33 +'%)';
});
internRightArrow.addEventListener('click', (e)=>{
  sectionIndex = (sectionIndex < 2) ? sectionIndex +1: 0;
  studentSlider.style.transform = 'translate('+ (sectionIndex) * -33 +'%)';
});
//membership button

function downloadMessage(){
  if (confirm("do you want to download the file again?")){
    
  }
}

//student-intern

function showContent(){
  document.getElementById('text').style.bottom = '0'
}
function removeContent(){
  document.getElementById('text').style.bottom = '-25vh'
}

function showContentOne(){
  document.getElementById('text1').style.bottom = '0'
}
function removeContentOne(){
  document.getElementById('text1').style.bottom = '-25vh'
}

function showContentTwo(){
  document.getElementById('text2').style.bottom = '0'
}
function removeContentTwo(){
  document.getElementById('text2').style.bottom = '-25vh'
}


//student intern mobile slider



//membership button

function downloadMessage(){
  if (confirm("do you want to download the file again?")){
    
  }
}
