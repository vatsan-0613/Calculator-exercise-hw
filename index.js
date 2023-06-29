const btns = document.getElementsByClassName("btn");

Array.from(btns).forEach((b) => {
  b.addEventListener("click", enter);
});

function isValid() {
  try {
    eval(document.getElementById("res").innerHTML);
    return calculate();
  } catch (err) {
    document.getElementById("res").innerHTML = "syntax error";
    setTimeout(function() {
        document.getElementById("res").innerText = "";
      }, 1000);
    return false;
  }
}
function enter(event) {
  
  if (event.target.parentNode.classList.contains("clicked")) {
    event.target.parentNode.classList.remove("clicked");
    setTimeout(function() {
        event.target.parentNode.classList.add('clicked');
      }, 100);
  } else {
    event.target.parentNode.classList.add("clicked");
    setTimeout(function() {
        event.target.parentNode.classList.remove('clicked');
      }, 100);
  }
  if(event.target.classList.contains("extra")) {
    return ;
  }
  const typed = event.target.innerText;
  console.log(typed);
  const res = document.getElementById("res").innerText;
  const altered = res + typed;
  document.getElementById("res").innerText = altered;
}

function calculate() {
  const answer = eval(document.getElementById("res").innerText);
  console.log(answer);
  document.getElementById("res").innerText = answer;
}

function clearAll() {
  document.getElementById("res").innerText = "";
}

function inverse() {
  const r = Number(document.getElementById("res").innerText);
  console.log(-r);
  document.getElementById("res").innerText = String(-r);
}

document
  .getElementsByClassName("icon")[0]
  .addEventListener("click", function () {
    document.getElementById("res").innerHTML = document
      .getElementById("res")
      .innerHTML.substring(
        0,
        document.getElementById("res").innerHTML.length - 1
      );
  });

