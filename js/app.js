const buttons = document.querySelectorAll(".button");
const divButtons = document.querySelector('.buttons-container')

let randomNumber = Math.round(Math.random() * (buttons.length))

if(randomNumber === 0){
    randomNumber = 1
} if(randomNumber === 6){
    randomNumber = 5
}


divButtons.addEventListener('click', e => {

    e.target.classList.remove('active')
    buttons[randomNumber].classList.add('active')
  
})    

