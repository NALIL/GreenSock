

/* Анимация главной страницы */
var tl = gsap.timeline({paused:true});
var tlTitle = gsap.timeline();

tlTitle. fromTo('.hero__title , .hero__btn', {
    y:70,
    opacity:0
}, {
    y:0,
    opacity:1,
    duration: 2
},
).fromTo('.hero__descr',{
    y:30,
    opacity:0
}, {
    y:0,
    opacity:1,
    duration: 2,
    delay: 0.4
},
0.5
).fromTo('.photos-wrap__1',{
    scale: 0.7,
    opacity:0
}, {
    scale: 1,
    opacity:1,
    duration: 2,
    delay: 0.4
},
0.5).fromTo('.photos-wrap__2',{
    scale: 0.8,
    opacity:0
}, {
    scale: 1,
    opacity:1,
    duration: 2,
    delay: 0.4
},
0.8).fromTo('.photos-wrap__3',{
    scale: 0.8,
    opacity:0
}, {
    scale: 1,
    opacity:1,
    duration: 2,
    delay: 0.4
},
1.2).fromTo('.photos__author',{
    
    opacity:0
}, {  
    opacity:1,
    duration: 2,
    delay: 0.8
},1.5)


var open = document.querySelector('.burger');
var close = document.querySelector('.close');

tl.fromTo('.menu',{display: 'none', opacity: 0}, {display: 'block', duration:2, opacity: 1, ease:'sine'})
    .from('.menu__top', {duration:0.5, y:-30, opacity:0, ease: 'sine'})
    .from('.nav__list', {duration:0.5, y: 30, opacity:0, ease: 'sine'})
    .from('.social, .menu__right', {duration:0.5, y:30, opacity:0, ease: 'sine'})


open.onclick = function() {
    tl.play();
}

close.onclick = function() {
    tl.reverse();
}
