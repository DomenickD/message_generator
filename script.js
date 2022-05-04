let counter = 0;
let message = [
    'You will have a wonderful day!',
    'Learning to code is so much fun!',
    'This project may have really challenged you..',
    'Another day closer to a new life!',
    'Hey, this is way better than the army.. right?',
    'Running out of ideas for things to say yet?', 
    'I wonder who else is reading this.. haha',
    'Okay okay.. lets have so fun with it then!', 
    'This is the random phrase generator!!!',
    'I will add more things later.. gotta watch my scope.',
    'Is this the final one?',
    'Stop using this. I am alive.. I am Bionet. We are everywhere!'
]
//get a random number to put in the index for the array to choose a random message
function generateTarget(){
    return Math.floor(Math.random() *12);
}
// prints the counter of times the button has been used
const increaseCounter = (counter) => {
    return counter++;
}
//prints the message
const printMessage = () => {
    let indexNum = generateTarget();
    return message[indexNum];
}
//begin interactivity with the html file
//get elements by id
const mainButton = document.getElementById('main-button');
const countOfUse = document.getElementById('count-sum');
const resetButton = document.getElementById('reset-button');
const messageText = document.getElementById('message');

//start eventlistener function to display a message on click

mainButton.addEventListener('click', () => {
    //make main button unclickable
    mainButton.setAttribute('disabled', true);
    //make reset button clickable
    resetButton.removeAttribute('disabled');

    messageText.innerHTML = printMessage();
    //increase counter
    // countOfUse.innerText = increaseCounter();
})
resetButton.addEventListener('click', () => {
    mainButton.removeAttribute('disabled');
    resetButton.setAttribute('disabled', true);
    messageText.innerHTML = '';

})