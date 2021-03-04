// $(document).ready(function(){
//     $.get("header.html", function(data) {
//       $("#header").html(data);
//     });
//   });





const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const headline = document.querySelector('.headline');
const headline1 = document.querySelector('.headline1');
const footer = document.querySelector('footer');
const link = document.querySelector('.link');


const tl = new TimelineMax();
tl.fromTo(hero,1,{height: '120%'}
,{height: '100%', ease: Power2.easeInOut})
.fromTo(hero,1.3,{width: '100%'}
,{width: '80%', ease: Power2.easeInOut});


const t2 = new TimelineMax();
t2.fromTo(hero,1,{height: '120%'}
,{height: '100%', ease: Power2.easeInOut})
.fromTo(footer,1.3,{width: '100%'}
,{width: '80%', ease: Power2.easeInOut});


const t3 = new TimelineMax();
t3.fromTo(headline,0.8,{left: '0%'}
,{left: '40%', ease: Power2.easeInOut})
.fromTo(headline,1.3,{left: '30%'}, {top: '22%'}).fromTo(headline,1.3,
{top: '88%'}, {left: '30%', ease: Power2.easeInOut});



const t4 = new TimelineMax();
t4.fromTo(headline1,0.8,{left: '0%'}
,{left: '40%', ease: Power2.easeInOut})
.fromTo(headline1,1.3,{left: '30%'}, {top: '88%'}).fromTo(headline1,1.3,
{top: '15%'}, {left: '30%', ease: Power2.easeInOut});
