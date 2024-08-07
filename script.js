/*Add your JavaScript here*/
var questionCount = 0;
var miaScore = 0;
var sebastianScore = 0;


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");

var restart = document.getElementById("restart");

restart.addEventListener("click", restartFunction);

q1a1.addEventListener("click", mia);
q1a2.addEventListener("click", sebastian);
q2a1.addEventListener("click", mia);
q2a2.addEventListener("click", sebastian);
q3a1.addEventListener("click", mia);
q3a2.addEventListener("click", sebastian);
q4a1.addEventListener("click", mia);
q4a2.addEventListener("click", sebastian);
q5a1.addEventListener("click", mia);
q5a2.addEventListener("click", sebastian);
q6a1.addEventListener("click", mia);
q6a2.addEventListener("click", sebastian);
q7a1.addEventListener("click", mia);
q7a2.addEventListener("click", sebastian);

q1a1.addEventListener("click", disableBtn);
q1a2.addEventListener("click", disableBtn);
q2a1.addEventListener("click", disableBtn);
q2a2.addEventListener("click", disableBtn);
q3a1.addEventListener("click", disableBtn);
q3a2.addEventListener("click", disableBtn);
q4a1.addEventListener("click", disableBtn);
q4a2.addEventListener("click", disableBtn);
q5a1.addEventListener("click", disableBtn);
q5a2.addEventListener("click", disableBtn);
q6a1.addEventListener("click", disableBtn);
q6a2.addEventListener("click", disableBtn);
q7a1.addEventListener("click", disableBtn);
q7a2.addEventListener("click", disableBtn);

function disableBtn() {
  if (questionCount == 1) {
    q1a1.disabled = true;
    q1a2.disabled = true;
  }
  else if (questionCount == 2) {
    q2a1.disabled = true;
    q2a2.disabled = true;
  }
  else if (questionCount == 3) {
    q3a1.disabled = true;
    q3a2.disabled = true;
  }

  else if (questionCount == 4) {
    q4a1.disabled = true;
    q4a2.disabled = true;
  }

  else if (questionCount == 5) {
    q5a1.disabled = true;
    q5a2.disabled = true;
  }

  else if (questionCount == 6) {
    q6a1.disabled = true;
    q6a2.disabled = true;
  }

  else if (questionCount == 7) {
    q7a1.disabled = true;
    q7a2.disabled = true;
  }

}

function mia() {
  miaScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "miaScore = " + miaScore);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult();
  }

}


function sebastian() {
  sebastianScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "sebastianScore = " + sebastianScore);

  if (questionCount == 7) {
    console.log("The quiz is done!");
    updateResult();
  }

}


function updateResult() {
  if (miaScore >= 4) {
    result.innerHTML = "You are Mia!";
    console.log("You are Mia!");
  }
  else if (sebastianScore >= 4) {
    result.innerHTML = "You are Sebastian!";
    console.log("You are Sebastian!");
  }
}


function restartFunction() {
  questionCount = 0;
  miaScore = 0;
  sebastianScore = 0;
  restart.innerHTML = "Restart";
  console.log("questionCount = " + questionCount + "miaScore = " + miaScore + "sebastianScore = " + sebastianScore);

  if (questionCount == 0) {
    q1a1.disabled = false;
    q1a2.disabled = false;

    q2a1.disabled = false;
    q2a2.disabled = false;

    q3a1.disabled = false;
    q3a2.disabled = false;

    q4a1.disabled = false;
    q4a2.disabled = false;

    q5a1.disabled = false;
    q5a2.disabled = false;

    q6a1.disabled = false;
    q6a2.disabled = false;

    q7a1.disabled = false;
    q7a2.disabled = false;

    result.innerHTML = "You are..."
  }
}


