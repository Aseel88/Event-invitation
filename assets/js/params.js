const title = document.querySelector('h1.title');
const param2 = document.querySelector('p.param2');

const params = new URLSearchParams(window.location.search)
for (const param of params) {
  console.log(param);

const name =  params.get('name');
const tel =  params.get('tel');

title.textContent = `Welcome ${name}!`;
param2.textContent = `We will send you a verification code to your mobile number: ${tel}.`;

};
