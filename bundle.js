(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const form = document.querySelector('form');
const greeting = document.getElementById('greeting');
const occasion = document.getElementById('occasion');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    let greetingEntered = event.target.greeting.value;
    document.querySelector('h3').textContent += greetingEntered;
    document.getElementById('occasionSelected').textContent = `Occasion: ${event.target.occasion.value}`;
    document.getElementById('messageWritten').textContent = `Message: ${event.target.message.value}`;
    form.style.color = "red";
});
},{}]},{},[1]);
