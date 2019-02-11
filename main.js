let mbtn = document.getElementsByClassName('menu-slide')[0];
let hdrBlur = document.querySelector('.header-bg');

function openMenu(){

    if(mbtn.style.opacity == '1'){
        mbtn.style.opacity = '0';
        hdrBlur.className = 'header-bg';

    }else{
        mbtn.style.opacity = '1';
        hdrBlur.className += ' blur-header-bg';
    }
}
