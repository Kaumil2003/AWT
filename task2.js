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
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;

    if (isNaN(number1)) {
        document.getElementById("error1").innerHTML = " * Please enter valid numbers.";
      return;
    }
    if (isNaN(number2)) {
        document.getElementById("error2").innerHTML = " * Please enter valid numbers.";
      return;
    }

    var result = parseFloat(number1) - parseFloat(number2);
    displayResult(result);
  }

  function multiply() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    if (isNaN(n1)) {
        document.getElementById("error1").innerHTML = " * Please enter valid numbers.";
      return;
    }
    if (isNaN(n2)) {
        document.getElementById("error2").innerHTML = " * Please enter valid numbers.";
      return;
    }

    var result = parseFloat(n1) * parseFloat(n2);
    displayResult(result);
  }

  function divide() {
    var num1 = document.getElementById("nu1").value;
    var num2 = document.getElementById("nu2").value;

    if (isNaN(nu1)) {
        document.getElementById("error1").innerHTML = " * Please enter valid numbers.";
      return;
    }
    if (isNaN(nu2)) {
        document.getElementById("error2").innerHTML = " * Please enter valid numbers.";
      return;
    }

    if (parseFloat(nu2) === 0) {
        document.getElementById("error2").innerHTML = " * can't divisable by zero";
      return;
    }

    var result = parseFloat(nu1) / parseFloat(nu2);
    displayResult(result);
  }

  function displayResult(result) {
    document.getElementById("msg").innerHTML = "Result: " + result;
  
  }

  