const navbar = document.querySelector("#nav");
const navBtn = document.querySelector(".logo-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

// add fixed class to navbar
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


// document.querySelector(".navbar-btn").addEventListener("click", function () {
// document.querySelector(".navbar-wrapper").classList.toggle("change");
// });

//slider show
const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;
// <!-- left Aroow Funcrion -->
leftArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex > 0) ? sectionIndex -1 : 0;
  slider.style.transform = 'translate('+ (sectionIndex) * -25 +'%)';
})
// <!-- right Arrow Function -->
rightArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex < 3) ? sectionIndex +1 :3;
  slider.style.transform='translate('+ (sectionIndex) * -25 +'%)';
})

//membership button

function downloadMessage(){
  if (confirm("do you want to download the file again?")){
    
  }
}

//student-inter

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