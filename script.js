/*Add your JavaScript here*/

// Variables + event listeners

var q1a1 = document.getElementById("q1a1");
q1a1.addEventListener('click', joe);


var q1a2 = document.getElementById("q1a2");
q1a2.addEventListener('click', tom);

var q1a3 = document.getElementById("q1a3");
q1a3.addEventListener('click', harry);

var q2a1 = document.getElementById("q2a1").addEventListener('click', joe);
var q2a2 = document.getElementById("q2a2").addEventListener('click', harry);
var q2a3 = document.getElementById("q2a3").addEventListener('click', tom);

var q3a1 = document.getElementById("q3a1").addEventListener('click', joe);
var q3a2 = document.getElementById("q3a2").addEventListener('click', harry);
var q3a3 = document.getElementById("q3a3").addEventListener('click', tom);

var result = document.getElementById("result");
var resultPic = document.getElementById("resultPic");

var resetBut = document.getElementById("reset");


resetBut.addEventListener('click', reset);

//Joe Keery, Harry Styles, Tom Holland
var joe = 0;
var harry = 0;
var tom = 0;

var questCount = 0;


function joe() {
  joe++;
  questCount++;

  if (questCount == 3) {
    check();

  }
}

function harry() {
  harry++;
  questCount++;


  if (questCount == 3) {
    check();
  }
}

function tom() {
  tom++;
  questCount++;

  if (questCount == 3) {
    check();
  }
}

// checks result
function check() {
  if (joe >= 2) {
    result.innerHTML = `<strong>Joe Keery</strong>`
    resultPic.innerHTML = `<img src="personality_quiz/Joe.jpeg">`
  }
  else if (harry >= 2) {
    result.innerHTML = `<strong>Harry Styles</strong>`
    resultPic.innerHTML = `<img src="personality_quiz/Harry.jpg">`
  }
  else if (tom >= 2) {
    result.innerHTML = `<strong>Tom Holland</strong>`
    resultPic.innerHTML = `<img src="personality_quiz/Tom.jpeg">`
  }
  else {
    console.log(error);
  }
}

// Reset button 
function reset() {
  joe = 0;
  harry = 0;
  tom = 0;
  questCount = 0;
  result.innerHTML = "Your result is...";
  resultPic.innerHTML = "";
}
