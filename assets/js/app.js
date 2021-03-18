const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const headline = document.querySelector('.headline');
const headline1 = document.querySelector('.headline1');
const footer = document.querySelector('footer');
const linkOne = document.querySelector('a.link.one');
const linktwo = document.querySelector('a.link.two');
const lintDesktopOne = document.querySelector('a.linkDesktop.one');
const lintDesktopTwo = document.querySelector('a.linkDesktop.two');

const tl = gsap.timeline();
tl.to(hero, {width: '80%', duration: 0.9, ease: Power2.easeInOut})
.to(hero, {height: '100%', duration: 1, ease: Power2.easeInOut})


const tl2 = gsap.timeline();
tl2.to(footer, {width: '80%', duration: 0.9, ease: Power2.easeInOut})

const tl3 =gsap.timeline();
tl3.to(headline, {left: '77%', duration: 1})
.to(headline, {left: '10%', duration: 1})
.to(headline,{left: '43%', duration: 1.3,ease: Power2.easeInOut, top: '22%', duration: 1.3} )
.to(headline,{top: '88%', duration: 1.3});


const tl4 =gsap.timeline();
tl4.to(headline1, {left: '77%', duration: 1})
.to(headline1, {left: '10%', duration: 1})
.to(headline1, {left: '43%', duration: 1.3, ease: Power2.easeInOut, top: '88%', duration: 1.3})
.to(headline1,{top: '10%', duration: 1.3});

const tl5 =gsap.timeline();
tl5.to(linkOne, {display: 'none', duration: 1})
.to(linkOne, {display: 'block', duration: 1 });


const tl6 = gsap.timeline();
tl6.to(lintDesktopOne, {top: '0%', duration: 0.5 ,left: '0%', duration: 0.5})
.to(lintDesktopOne, {top: '0%', duration: 0.5 ,left: '40%', duration: 0.1})
.to(lintDesktopOne, {top: '40%', duration: 0.5 ,left: '45%', duration: 0.1})
.to(lintDesktopOne, {top: '70%', duration: 0.5 ,left: '50%', duration: 1})
.to(lintDesktopOne, {top: '80%', duration: 0.5 ,left: '55%', duration: 1})

const tl7= gsap.timeline();
tl7.to(lintDesktopTwo, {top: '0%', duration: 0.5 ,left: '0%', duration: 0.5})
.to(lintDesktopTwo, {top: '0%', duration: 0.5 ,left: '40%', duration: 0.1})
.to(lintDesktopTwo, {top: '40%', duration: 0.5 ,left: '37%', duration: 0.1})
.to(lintDesktopTwo, {top: '70%', duration: 0.5 ,left: '33%', duration: 1})
.to(lintDesktopTwo, {top: '80%', duration: 0.5 ,left: '30%', duration: 1})
