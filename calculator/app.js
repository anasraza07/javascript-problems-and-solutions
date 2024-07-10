let calculation = localStorage.getItem("calculation") || '0';
displayCalculation();

function displayNumber(number) {
    if (number !== "." && (calculation === "0" || calculation === 0)) {
        calculation = number;
    } else {
        calculation += number;
    }

    localStorage.setItem('calculation', calculation);

    displayCalculation();
};

function displayCalculation() {
    document.querySelector(".calculation").innerHTML = calculation;
};

function calculate() {
    calculation = eval(calculation);
    localStorage.setItem('calculation', calculation);
    displayCalculation();
};

function resetCalculation() {
    calculation = "0";
    localStorage.setItem('calculation', calculation);
    displayCalculation();
};
