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