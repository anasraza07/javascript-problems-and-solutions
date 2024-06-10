let calculation = localStorage.getItem("calculation") || '0';
displayCalculation();

function displayNumber(number) {
    if (number !== "." && (calculation === "0" || calculation === 0)) {
        calculation = number;
    } else {
        calculation += number;
    }

    localStorage.setItem('calculation', calculation);

    //  console.log(calculation);
    displayCalculation();
};

function displayCalculation() {
    document.querySelector(".calculation").innerHTML = calculation;
};

function calculate() {
    calculation = eval(calculation);
    localStorage.setItem('calculation', calculation);
    displayCalculation();
    //  console.log(calculation);
};

function resetCalculation() {
    calculation = "0";
    // console.log(calculation);
    localStorage.setItem('calculation', calculation);
    displayCalculation();
};
