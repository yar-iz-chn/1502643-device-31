let slide1 = document.querySelector('.services-description-delivery');
let slide2 = document.querySelector('.services-description-warranty');
let slide3 = document.querySelector('.services-description-credit');

let tabs = document.querySelectorAll('.services-tab');
let tab1 = document.querySelector('.delivery-link');
let tab2 = document.querySelector('.warranty-link');
let tab3 = document.querySelector('.credit-link');

tab1.onclick = function() {
    tab1.classList.add('current');
    tab2.classList.remove('current');
    tab3.classList.remove('current');
    slide1.classList.add('service-show');
    slide2.classList.remove('service-show');
    slide3.classList.remove('service-show');
}
tab2.onclick = function() {
    tab2.classList.add('current');
    tab1.classList.remove('current');
    tab3.classList.remove('current');
    slide2.classList.add('service-show');
    slide1.classList.remove('service-show');
    slide3.classList.remove('service-show');
}
tab3.onclick = function() {
    tab3.classList.add('current');
    tab2.classList.remove('current');
    tab1.classList.remove('current');
    slide3.classList.add('service-show');
    slide2.classList.remove('service-show');
    slide1.classList.remove('service-show');
}

let slide_1 = document.querySelector('.slider-item-1');
let slide_2 = document.querySelector('.slider-item-2');
let slide_3 = document.querySelector('.slider-item-3');

let tab_1 = document.querySelector('.dot-1');
let tab_2 = document.querySelector('.dot-2');
let tab_3 = document.querySelector('.dot-3');
tab_1.onclick = function() {
    tab_1.classList.add('active');
    tab_2.classList.remove('active');
    tab_3.classList.remove('active');
    slide_1.classList.add('slider-item-show');
    slide_2.classList.remove('slider-item-show');
    slide_3.classList.remove('slider-item-show');
}
tab_2.onclick = function() {
    tab_2.classList.add('active');
    tab_1.classList.remove('active');
    tab_3.classList.remove('active');
    slide_2.classList.add('slider-item-show');
    slide_1.classList.remove('slider-item-show');
    slide_3.classList.remove('slider-item-show');
}
tab_3.onclick = function() {
    tab_3.classList.add('active');
    tab_2.classList.remove('active');
    tab_1.classList.remove('active');
    slide_3.classList.add('slider-item-show');
    slide_2.classList.remove('slider-item-show');
    slide_1.classList.remove('slider-item-show');
}