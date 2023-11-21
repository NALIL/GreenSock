var open = document.querySelector('.burger');
var close = document.querySelector('.close');

var tl = gsap.timeline({paused:true});

tl.fromTo('.menu',{display: 'none', opacity: 0}, {display: 'block', duration:2, opacity: 1, ease:'sine'})
    .from('.menu__top', {duration:0.5, y:-30, opacity:0, ease: 'sine'})


open.onclick = function() {
    tl.play();
}

close.onclick = function() {
    tl.reverse();
}