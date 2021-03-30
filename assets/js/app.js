const hero = document.querySelector('.hero');
const logo = document.querySelector('.logo');
const footer = document.querySelector('footer');
const linkOne = document.querySelector('a.link.one');
const linktwo = document.querySelector('a.link.two');
const lintDesktopOne = document.querySelector('a.linkDesktop.one');
const lintDesktopTwo = document.querySelector('a.linkDesktop.two');
const headline = document.querySelector('.headline');


const tl3 =gsap.timeline();
tl3.to(headline, {y: '100%', duration: 1.5, opacity:0})
.to(headline, {y: '0%', opacity: 2 });



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


//animate the headline1
const headline1 = document.querySelector('.headline1');

const strHeadline1 = headline1.textContent;
const splitHeadline1 = strHeadline1.split("");
headline1.textContent = "";
for (let i=0; i< splitHeadline1.length; i++){
    headline1.innerHTML += "<span>"+ splitHeadline1[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = headline1.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitHeadline1.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer =null;
};



// scroll to the program
const initial = document.querySelector('button.initial');
function scrollWin() {
    window.scrollTo({ top: 2350,behavior: 'smooth' });
  }

initial.addEventListener('click', ()=>{
    scrollWin();
})



const title = document.querySelector('h1.title');
const titleDesktop = document.querySelector('h1.titleDesktop');


// add params
const params = new URLSearchParams(window.location.search)
for (const param of params) {
  console.log(param);
const name =  params.get('name');
title.textContent = `Välkommen ${name}!`;
titleDesktop.textContent = `Välkommen ${name}!`;
};


//animation in the first page
const user= document.querySelector('.cuser');
const cone1 = document.querySelector('.cone1');
const cone2 = document.querySelector('.cone2');

const container = document.querySelector('.container');



const tl8 = gsap.timeline();
tl8.to(cone1, {right: '-30%', duration: 0.3})
.to(cone1, {right: '10%', duration: 0.8})
.to(cone2, {left: '-30%', duration: 0.1})
.to(cone2, {left: '22%', duration: 0.8})
.to(title, {left: '-30%', duration: 0.1})
.to(title, {left: '10%', duration: 0.8})
.to(titleDesktop, {left: '-30%', duration: 0.1})
.to(titleDesktop, {left: '50%', duration: 0.8})
.to(initial, {opacity: '1', duration: 1.9});

TweenLite.to(cone1, 2, {rotation:-20, transformOrigin:"left 60%"});



//scroll to the form
const scrollForm = document.querySelector('.btn.scroll');
function scrollWin2() {
    window.scrollTo({ top: 4000,behavior: 'smooth' });
  };
  scrollForm.addEventListener('click', ()=>{
    scrollWin2();
})


// view the hero pic on scroll
const slideAnim = document.querySelectorAll('.toHide');

let onScroll = false;

const scrollProgress = () => {
    onScroll = true;
};

const isInViewport = (elem) => {
	let distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

slideAnim.forEach(element => {
    window.addEventListener('scroll', function (event) {
        if (isInViewport(element)) {
            element.classList.add('slide-in');
        }
    },
    false);
});


 //Back to the top
 const topBtn = document.getElementById("topBtn");

function scrollFunction() {
    console.log(topBtn);
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";

    } else {
      topBtn.style.display = "none";
    }
  }

window.onscroll = function() {scrollFunction()};

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  topBtn.addEventListener('click', ()=>{
    topFunction();
    console.log(topBtn)
  });
