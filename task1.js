function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (isNaN(num1)) {
        document.getElementById("error1").innerHTML = " * Please enter valid numbers.";
      return;
    }
    if (isNaN(num2)) {
        document.getElementById("error2").innerHTML = " * Please enter valid numbers.";
      return;
    }

    var result = parseFloat(num1) + parseFloat(num2);
    displayResult(result);
  }

  function subtract() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (isNaN(num1)) {
        document.getElementById("error1").innerHTML = " * Please enter valid numbers.";
      return;
    }
    if (isNaN(num2)) {
        document.getElementById("error2").innerHTML = " * Please enter valid numbers.";
      return;
    }

    var result = parseFloat(num1) - parseFloat(num2);
    displayResult(result);
  }

  function multiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (isNaN(num1)) {
        document.getElementById("error1").innerHTML = " * Please enter valid numbers.";
      return;
    }
    if (isNaN(num2)) {
        document.getElementById("error2").innerHTML = " * Please enter valid numbers.";
      return;
    }

    var result = parseFloat(num1) * parseFloat(num2);
    displayResult(result);
  }

  function divide() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (isNaN(num1)) {
        document.getElementById("error1").innerHTML = " * Please enter valid numbers.";
      return;
    }
    if (isNaN(num2)) {
        document.getElementById("error2").innerHTML = " * Please enter valid numbers.";
      return;
    }

    if (parseFloat(num2) === 0) {
        document.getElementById("error2").innerHTML = " * can't divisable by zero";
      return;
    }

    var result = parseFloat(num1) / parseFloat(num2);
    displayResult(result);
  }

  function displayResult(result) {
    document.getElementById("msg").innerHTML = "Result: " + result;
  
  }

  