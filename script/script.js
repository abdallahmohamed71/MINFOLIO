
let sideMenuIndex = 0;
function openx() {
  if (sideMenuIndex == 0) {
    document.getElementById("nav").style.display = "flex";
    sideMenuIndex = 1;
  } else {
    document.getElementById("nav").style.display = "none";
    sideMenuIndex = 0;
  }
}
// .....................
let Branding = 0;
function openBranding() {
  if (Branding == 0) {
    document.getElementById("flexg_Branding").style.display = "flex";
    document.getElementById("flexg_All").style.display ="none";
    Branding = 1;
  } 
  else {
    document.getElementById("flexg_Branding").style.display = "none";
    Branding = 0;
  }
}
// ........
let Design = 0;
function openDesign() {
  if (Design == 0) {
    document.getElementById("flexg_Design").style.display = "flex";
    document.getElementById("flexg_All").style.display ="none";
    document.getElementById("flexg_Branding").style.display ="none";
    Design = 1;
  } 
  else {
    document.getElementById("flexg_Design").style.display = "none";
    Design = 0;
  }
}
// ....................
let Identity = 0;
function openIdentity() {
  if (Identity == 0) {
    document.getElementById("flexg_Identity").style.display = "flex";
    document.getElementById("flexg_All").style.display ="none";
    document.getElementById("flexg_Branding").style.display ="none";
    document.getElementById("flexg_Design").style.display = "none";
    Identity = 1;
  } 
  else {
    document.getElementById("flexg_Design").style.display = "none";
    Identity = 0;
  }
}
// ........................
let All = 0;
function openAll() {
  if (All == 0) {
    document.getElementById("flexg_All").style.display ="flex";
    document.getElementById("flexg_Identity").style.display = "none";
    document.getElementById("flexg_Branding").style.display ="none";
    document.getElementById("flexg_Design").style.display = "none";
    All = 1;
  } 
  else {
    document.getElementById("flexg_Design").style.display = "none";
    All = 0;
  }
}
// ..................................................
let Printing = 0;
function openPrinting() {
  if (Printing == 0) {
    document.getElementById("info_Printing1").style.display = "flex";
    document.getElementById("info_Printing2").style.display ="none";
    document.getElementById("info_Printing3").style.display ="none";

    document.getElementById("main").style.display ="block";
    document.getElementById("main2").style.display ="none";
    document.getElementById("main3").style.display ="none";
    Printing = 1;
  } 
  else {
    document.getElementById("info_Printing1").style.display = "none";
    Printing = 0;
  }
}
// .
let Product = 0;
function openProduct() {
  if (Product == 0) {
    document.getElementById("info_Printing2").style.display = "flex";
    document.getElementById("info_Printing1").style.display ="none";
    document.getElementById("info_Printing3").style.display ="none";

    document.getElementById("main").style.display ="none";
    document.getElementById("main2").style.display ="block";
    
    Product = 1;
  } 
  else {
    document.getElementById("info_Printing2").style.display = "none";
    Product = 0;
  }
}
let Enhancement = 0;
function openEnhancement() {
  if (Enhancement == 0) {
    document.getElementById("info_Printing3").style.display ="flex";
    document.getElementById("info_Printing2").style.display = "none";
    document.getElementById("info_Printing1").style.display ="none";

    document.getElementById("main").style.display ="none";
    document.getElementById("main2").style.display ="none";
    document.getElementById("main3").style.display ="block";
    Enhancement = 1;
  } 
  else {
    document.getElementById("info_Printing2").style.display = "none";
    Enhancement = 0;
  }
}




// function openx() {
//     if (openx) {
//         document.getElementById("nav").style.display == "flex";
//     }else{
//         document.getElementById("nav").style.display == "block";
//     }
    
//   }
//   function exit() {
//     document.getElementById("nav").style.display = "none";
//   }
//   const menu =document.getElementById('menu');
//   const nav =document.getElementById('nav');
//   menu.onclick = function(){
//     menu.classList.menu('active');
//     nav.classList.menu('active');

//   }
// $(document).ready(function() {
//     $(".lift").click(function() {
//          $('html, body').animate({
//              scrollTop: $(".right").offset().top
//          }, 1500);
//      });
//     });
    
//     $(document).ready(function() {
//     $(".right").click(function() {
//          $('html, body').animate({
//              scrollTop: $(".lift").offset().top
//          }, 1000);
//      });
//     });
// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector("slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");

// nextButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener("click", () => {
//   const slideWidth = slide.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });