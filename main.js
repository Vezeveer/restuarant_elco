let mbtn = document.getElementsByClassName('menu-slide')[0];
let headerBG = document.querySelector('.header-bg');
var sect1 = document.querySelector('.section1');
let scrollArrow = document.querySelector('#scroll-arrow');
let logo = document.querySelector('.logo');
let elcoDiv = document.querySelector('.elconsos-div');
let topBar = document.querySelector('.top-bar');
let mainContainer = document.querySelector('.main-container');

function openMenu(){

    if(mbtn.style.opacity == '1'){
        mbtn.style.opacity = '0';
        headerBG.className = 'header-bg';
        mainContainer.className = 'main-container'

    }else{
        mbtn.style.opacity = '1';
        headerBG.className += ' blur';
        mainContainer.className += ' blur';
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

/*
function scrollIntoView(){
    sect1 = '0';
}
*/
let posCount = 0;
let isScrolling;
window.addEventListener('wheel', function(){
    window.clearTimeout( isScrolling );
    
    let upperPos = document.querySelector('#upper').getBoundingClientRect().bottom;

    isScrolling = setTimeout(function(){
        if(upperPos > 0){
            scrollToMid();
            console.log('up',posCount)
            
            switch(posCount){
            case(1):
                changeBGtoLand();
                posCount--;
                scrollArrow.style.display = 'block';
                logo.className = 'logo';
                elcoDiv.className = 'elconsos-div';
                headerBG.style.filter = 'none';
                topBar.style.display = 'none';
                break;
            case(2):
                posCount--;
                break;
            case(3):
                posCount--;
                break;
            case(4):
                posCount--;
                break;
            case(5):
                changeBGtoSect1();
                posCount--;
                break;
            }
        }else if(upperPos < 0){
            scrollToMid();
            console.log('down',posCount)
            switch(posCount){
            case(0): //enter section1
            changeBGtoSect1();
            posCount++;
            scrollArrow.style.display = 'none';
            logo.className += ' logo-offScreen';
            elcoDiv.className += ' elconsos-div-offScreen';
            headerBG.style.filter = 'brightness(.5)';
            topBar.style.display = 'block';
                break;
            case(1):
                posCount++;
                break;
            case(2):
                posCount++;
                break;
            case(3):
                posCount++;
                break;
            case(4):
            changeBGtoAbout();
                posCount++;
                break;
            }
        }
    }, 100);
}, false);

