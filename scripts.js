
let myChoices = document.getElementsByClassName("myChoice");
let clickedChoice = document.getElementById("clickedChoice");

for (let i = 0; i < myChoices.length; i++) {
  myChoices[i].addEventListener("click", function() {
    clickedChoice.value = this.innerText;
    
    for (let j = 0; j < myChoices.length; j++) {
      myChoices[j].style.backgroundColor = "";
      myChoices[j].style.color = "";
    }
    
    this.style.backgroundColor = "hsl(25, 97%, 53%)";
    this.style.color = "white";
  });
}

let btnClicked = document.getElementById('btn');
let rateChoice = document.getElementById('rateChoice');
const elementToHide = document.getElementById('element-to-hide');
const elementToShow = document.getElementById('element-to-show');

btnClicked.addEventListener('click', function() {
  
  if (clickedChoice.value < "1" ) {
    alert('Please select a number');
  } else {
    rateChoice.innerText = clickedChoice.value;
    elementToHide.style.display = 'none';
    elementToShow.style.display = 'block';
  }
});
