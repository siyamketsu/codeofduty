let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let navScroll = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let navOnScroll = window.scrollY > 0;
    navScroll.classList.toggle('scroll-active', navOnScroll);
  })




// SWITCH LOGIN/SIGN UP
let signUpBtn = document.querySelector(".signup-btn");
let signInBtn = document.querySelector(".signin-btn");

signUpBtn.onclick = function (){
  loginForm.classList.add("changes");
}
signInBtn.onclick = function (){
  loginForm.classList.remove("changes");
}

// SELL FORM 
let showForm = document.querySelector("#sell");
let hideForm = document.querySelector(".log-close");


let sellForm = document.querySelector(".pop-sell");

showForm.onclick = function (){
    sellForm.style.display = "block";
    document.body.classList.add('salmon');
}
hideForm.onclick = function (){
    sellForm.style.display = "none";
}
