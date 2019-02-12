let mbtn = document.getElementsByClassName('menu-slide')[0];
let hdrBlur = document.querySelector('.header-bg');
var sect1 = document.querySelector('.section1');


function openMenu(){

    if(mbtn.style.opacity == '1'){
        mbtn.style.opacity = '0';
        hdrBlur.className = 'header-bg';

    }else{
        mbtn.style.opacity = '1';
        hdrBlur.className 
        += ' blur-header-bg';
    }
}

function resize(){
    hdrBlur.style.backgroundImage = "url('section1.jpg')";
}

/*
function scrollIntoView(){
    sect1 = '0';
}


let isScrolling;
window.addEventListener('scroll', function(){
    window.clearTimeout( isScrolling );
    
    let topSect1 = sect1
    .getBoundingClientRect().top;

    isScrolling = setTimeout(function(){
        if( topSect1< '580' && !(topSect1 < '500')){
            topSect1='0';
            window.scrollTo(0,500);
            console.log('true')
            return;
        }else{
            console.log(topSect1)
            return;
        }
        
    }, 50);
}, false);
*/