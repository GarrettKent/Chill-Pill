//grab HTML elements
const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breathTime = (totalTime) / 5 * 2;
const holdTime = (totalTime) / 5;

//call function immediately
breathAnimation()

function breathAnimation(){
    text.innerHTML = 'Breath In...';
    container.className = 'container grow';
    
    //cue text when breathTime ends at 3 seconds
    setTimeout(() => {
        text.innerText = 'Hold...'

        //cue text when holdTime ends at 6.5 seconds 
        setTimeout(() => {
            text.innerText = 'Breathe Out'
            container.className = 'container shrink'
        }, holdTime)

    }, breathTime)
}

//run function every 7.5 seconds
setInterval(breathAnimation, totalTime);