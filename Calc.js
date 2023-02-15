let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
sum = document.getElementById("sum-el")

function add() {
sum.textContent = "Sum: " + (num1 + num2)
}

function substract () {
    sum.textContent = "Sum: " + (num1 - num2)
}

function divide () {
    sum.textContent = "Sum: " + (num1/num2)
}

function multiply() {
    sum.textContent = "Sum: " + (num1 * num2)
}