let mbtn = document.getElementsByClassName('menu-slide')[0];
let headerBG = document.querySelector('.header-bg');
var sect1 = document.querySelector('.section1');
let scrollArrow = document.querySelector('#scroll-arrow');
let logo = document.querySelector('.logo');
let elcoDiv = document.querySelector('.elconsos-div');
let topBar = document.querySelector('.top-bar');
let mainContainer = document.querySelector('.main-container-mobile');
let dish = document.querySelectorAll('.dish');

let posCount = 0;
let isScrolling;


document.body.onresize = function(){
    if(document.body.offsetWidth > '705')
    clearAbout();
}

function homeBtn(){
    page1();
    menuClose();
}
function breakfastBtn(){
    servingScreen();
    swapBreakfast();
    menuClose();
}
function lunchBtn(){
    servingScreen();
    swapLunch();
    menuClose();
}
function dinnerBtn(){
    servingScreen();
    swapDinner();
    menuClose();
}
function aboutBtn(){
    servingScreen();
    swapAbout();
    menuClose();
}

function menuOpen(){
    mbtn.style.opacity = '1';
    mbtn.className += ' slide';
    headerBG.className += ' blur';
    mainContainer.className += ' blur';
}

function menuClose(){
    mbtn.style.opacity = '0';
    mbtn.className = 'menu-slide';
    headerBG.className = 'header-bg';
    mainContainer.className = 'main-container-mobile'
}

function openMenu(){
    if(mbtn.style.opacity == '1'){
        menuClose();
    }else{
        menuOpen();
    }
}

function changeBGtoSect1(){
    headerBG.style.backgroundImage = "url('section1.jpg')";
}
function changeBGtoLand(){
    headerBG.style.backgroundImage = "url('Landing.jpg')";
}
function changeBGtoAbout(){
    headerBG.style.backgroundImage = "url('aboutus.jpg')";
}
function swapLunch(){
    topBar.innerHTML = '<h2>Lunch<h2>';
    dish[0].className = 'dish-odd dish odd-lunch';
    dish[1].className = 'dish-even dish even-lunch';
    dish[2].className = 'dish-odd dish odd-lunch';
    posCount=2;
    if(posCount!=4)
    clearAbout();
    
}
function swapBreakfast(){
    topBar.innerHTML = '<h2>Breakfast<h2>';
    dish[0].className = 'dish-odd dish odd-breakfast';
    dish[1].className = 'dish-even dish even-breakfast';
    dish[2].className = 'dish-odd dish odd-breakfast';
    posCount=1;
    if(posCount!=4)
    clearAbout();
}
function swapDinner(){
    topBar.innerHTML = '<h2>Dinner<h2>';
    dish[0].className = 'dish-odd dish odd-dinner';
    dish[1].className = 'dish-even dish even-dinner';
    dish[2].className = 'dish-odd dish odd-dinner';
    posCount=3;
    if(posCount!=4)
    clearAbout();
}
function swapAbout(){
    dish[0].className = 'dish-odd dish odd-about';
    dish[1].className = 'dish-even dish even-about';
    dish[2].className = 'dish-odd dish odd-about';
    topBar.innerHTML = '<h2>About<h2>';
    document.querySelector('.about').style.display = 'flex';
    changeBGtoAbout();
    posCount=4;
}
function swapToHidden(){
    topBar.innerHTML = '<h2><h2>';
    dish[0].className = 'dish-odd dish';
    dish[1].className = 'dish-even dish';
    dish[2].className = 'dish-odd dish';
}


function page1(){
    changeBGtoLand();
    scrollArrow.style.display = 'block';
    logo.className = 'logo';
    elcoDiv.className = 'elconsos-div';
    headerBG.style.filter = 'none';
    topBar.style.display = 'none';
    swapToHidden();
    posCount=0;
    if(posCount!=4)
        clearAbout();
}

function servingScreen(){
    changeBGtoSect1();
    scrollArrow.style.display = 'none';
    logo.className += ' logo-offScreen';
    elcoDiv.className += ' elconsos-div-offScreen';
    headerBG.style.filter = 'brightness(.5)';
    topBar.style.display = 'block';
}

function clearAbout(){
    document.querySelector('.about').style.display = 'none';
}

function scrollToMid(){
    document.querySelector('#middle').scrollIntoView();
}

//cautionary measure
window.addEventListener('load', function(){
    let midPosition = document.querySelector('#middle').getBoundingClientRect().top;
    if(midPosition>0 || midPosition<0){
        scrollToMid();
    }
})



//MAIN
window.addEventListener('scroll', throttle( 250));

function throttle( wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
        (function(){
    window.clearTimeout( isScrolling );
    
    let upperPos = document.querySelector('#upper').getBoundingClientRect().bottom;

    isScrolling = setTimeout(function(){
        dimIfOffscreen('.desk-land-img-container', '.desktop-meals','.desk-about');


        if(upperPos > 0){
            scrollToMid();
            console.log('up',posCount)
            if(posCount > 0 && posCount <= 4)posCount--;
            switch(posCount){
            case(0):
                page1();
                break;
            case(1):
            swapBreakfast();
                break;
            case(2):
            swapLunch();
                break;
            case(3):
            swapDinner();
            changeBGtoSect1();
                break;
            }
        }else if(upperPos < 0){
            scrollToMid();
            console.log('down',posCount)

            if(posCount >= 0 && posCount < 4)posCount++;
            switch(posCount){
            case(1): //enter section1
            servingScreen();
            swapBreakfast();
                break;
            case(2):
            swapLunch();
                break;
            case(3):
            swapDinner();
                break;
            case(4):
            swapAbout();
                break;
            }
        }
    }, 100);
})();
            
      time = Date.now();
    }
  }
}

function dimIfOffscreen(topClassContainer, midClassContainer, lowerClassContainer){
    let containerTopVal = document.querySelector(topClassContainer).getBoundingClientRect().top;
    let winInnerHeight = window.innerHeight;
    let containerMidVal = document.querySelector(midClassContainer).getBoundingClientRect().top;
    let containerLowerVal = document.querySelector(lowerClassContainer).getBoundingClientRect().top;

    
    if(containerTopVal*-1 >= Math.floor(winInnerHeight/2)){
        document.querySelector(topClassContainer).style.opacity = '.2';
        document.querySelector(midClassContainer).style.opacity = '1';
        changeDeskNav();
    }
    if(containerTopVal*-1 <= Math.floor(winInnerHeight/2)){
        document.querySelector(topClassContainer).style.opacity = '1';
        document.querySelector(midClassContainer).style.opacity = '.2';
        changeDeskNavNormal();
    }
    if(containerMidVal*-1 >= Math.floor(winInnerHeight/2)){
        document.querySelector(midClassContainer).style.opacity = '.2';

    }
    if(containerLowerVal >= Math.floor(winInnerHeight/2)){
        document.querySelector(lowerClassContainer).style.opacity = '.2';
        
    }else if(containerLowerVal <= Math.floor(winInnerHeight/2)){

        document.querySelector(lowerClassContainer).style.opacity = '1';

    }
}

function changeDeskNav(){
  
    let deskLogo = document.querySelector('.desk-logo');
    let deskNavbar = document.querySelectorAll('.desk-navbar div a');
    for(let i=0;i<4;i++){
    deskNavbar[i].style.lineHeight = '40px';
    deskNavbar[i].style.fontSize = '1em';
    }
    deskLogo.style.filter = 'brightness(.5)';
    deskLogo.style.width = '50px';
}
function changeDeskNavNormal(){
 
    let deskNavbar = document.querySelectorAll('.desk-navbar div a');
    let deskLogo = document.querySelector('.desk-logo');

    for(let i=0;i<4;i++){
    deskNavbar[i].style.lineHeight = '60px';
    deskNavbar[i].style.fontSize = '1.2em';
    }
    deskLogo.style.filter = 'brightness(1)';
    deskLogo.style.width = '100px';
}