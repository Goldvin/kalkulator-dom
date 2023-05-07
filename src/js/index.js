var operatorButtons = document.getElementsByClassName("operator-btn");
var selectedOperator = null;

for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function() {
    // Hapus kelas 'selected' dari tombol operator sebelumnya (jika ada)
    if (selectedOperator) {
      selectedOperator.classList.remove("selected");
    }

    // Tandai tombol operator yang diklik dengan kelas 'selected'
    this.classList.add("selected");
    selectedOperator = this;

    // Hitung hasil setelah memilih operator
    calculate();
  });
}

function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = selectedOperator ? selectedOperator.textContent : null;
  var result;

  if (!operator) {
    document.getElementById("result").textContent = "";
    return;
  }

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "x") {
    result = num1 * num2;
  } else if (operator === "÷") {
    result = num1 / num2;
  }

  document.getElementById("result").textContent = result;
}

document.getElementById("resetBtn").addEventListener("click", function() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";

  // Hapus kelas 'selected' dari tombol operator yang terpilih
  if (selectedOperator) {
    selectedOperator.classList.remove("selected");
    selectedOperator = null;
  }

  document.getElementById("result").textContent = "";
});
