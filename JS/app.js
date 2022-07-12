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

const dropShows = document.querySelectorAll('.ones');
const dropShowsTwos = document.querySelectorAll('.twos');
const dropShowsThrees = document.querySelectorAll('.threes');

//for drop show one
for(const dropButton of dropButtons){
  dropButton.addEventListener('click', ()=>{
   for(const dropShow of dropShows){
     dropShow.style.display = 'block';
   };
  });
};

//for drop show two
for(const dropButtonTwo of dropButtonsTwo){
  dropButtonTwo.addEventListener('click', ()=>{
    for(const dropShowTwo of dropShowsTwos){
      dropShowTwo.style.display = 'block';
    };
  });
};

//for drop show three
for(const dropButtonThree of dropButtonsThree){
  dropButtonThree.addEventListener('click', ()=>{
    for(const dropShowThree of dropShowsThrees){
      dropShowThree.style.display = 'block';
    };
  });
};


//slider show
const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

leftArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex > 0) ? sectionIndex -1 : 0;
  slider.style.transform = 'translate('+ (sectionIndex) * -25 +'%)';
});

rightArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex < 3) ? sectionIndex +1 :3;
  slider.style.transform='translate('+ (sectionIndex) * -25 +'%)';
});

//membership button

function downloadMessage(){
  if (confirm("do you want to download the file again?")){
    
  }
}

//student-intern

function showContent(){
  document.getElementById('text').style.transform = 'translateY(-27%)'
}
function removeContent(){
  document.getElementById('text').style.transform = 'translateY(0%)'
}

function showContentOne(){
  document.getElementById('text1').style.transform = 'translateY(-27%)'
}
function removeContentOne(){
  document.getElementById('text1').style.transform = 'translateY(0%)'
}

function showContentTwo(){
  document.getElementById('text2').style.transform = 'translateY(-27%)'
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