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
    }
  })
}
//slider show
const slider = document.querySelector('.slider');
const studentSlider = document.querySelector('.intern-slider');

const leftArrows = document.querySelectorAll('.left');
const rightArrows = document.querySelectorAll('.right');
const internLeftArrow = document.querySelector('.leftb');
const internRightArrow = document.querySelector('.rightb');

let sectionIndex = 0;

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
}

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
  document.getElementById('text').style.transform = 'translateY(-75%)'
}
function removeContent(){
  document.getElementById('text').style.transform = 'translateY(0%)'
}

function showContentOne(){
  document.getElementById('text1').style.transform = 'translateY(-75%)'
}
function removeContentOne(){
  document.getElementById('text1').style.transform = 'translateY(0%)'
}

function showContentTwo(){
  document.getElementById('text2').style.transform = 'translateY(-78%)'
}
function removeContentTwo(){
  document.getElementById('text2').style.transform = 'translateY(0%)'
}


//student intern mobile slider



//membership button

function downloadMessage(){
  if (confirm("do you want to download the file again?")){
    
  }
}

//max number