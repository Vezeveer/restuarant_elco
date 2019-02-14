let mbtn = document.getElementsByClassName('menu-slide')[0];
let headerBG = document.querySelector('.header-bg');
var sect1 = document.querySelector('.section1');
let scrollArrow = document.querySelector('#scroll-arrow');
let logo = document.querySelector('.logo');


function openMenu(){

    if(mbtn.style.opacity == '1'){
        mbtn.style.opacity = '0';
        headerBG.className = 'header-bg';

    }else{
        mbtn.style.opacity = '1';
        headerBG.className 
        += ' blur-header-bg';
    }
}

function changeBGtoSect1(){
    headerBG.style.backgroundImage = "url('section1.jpg')";
}
function changeBGtoLand(){
    headerBG.style.backgroundImage = "url('Landing.jpg')";
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
            if(posCount == 1){ //enter landing
                changeBGtoLand();
                posCount--;
                scrollArrow.style.display = 'block';
            };
            if(posCount > 1 && posCount <= 5){
                posCount--;
            }
        }else if(upperPos < 0){
            scrollToMid();
            console.log('down',posCount)
            if(posCount == 0){ //enter section1
                changeBGtoSect1();
                posCount++;
                scrollArrow.style.display = 'none';
                logo.className += ' logo-offScreen';
            }
            
        }
    }, 100);
}, false);

