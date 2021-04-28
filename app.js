const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (secondsDegrees == 90) {
      secondHand.classList.add("no-transition");
    } else {
      secondHand.classList.remove("no-transition");
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    


   
}

setInterval(setDate, 1000);

  

  

