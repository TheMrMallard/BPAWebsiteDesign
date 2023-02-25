function getLoanInfo(event) {
    event.preventDefault();

    var form = document.getElementById('loanForm');
    var formData = new FormData(form);

    var annualInterest = formData.get("annualInterest");
    var principal = formData.get("principalLoan");
    var months = formData.get("months");

    var loan = calculateLoan(annualInterest, principal, months);
    showLoan(loan);
}

function showLoan(input) {
    var outputId = document.getElementById("output");

    outputId.innerHTML = `<h2>The calculated loan is $${input}</h2>`
}

function calculateLoan(annualInterest, initial, months) {
    var monthlyInterest = annualInterest / 12
    var loan = (monthlyInterest + monthlyInterest / ((1 + monthlyInterest)^months - 1)) * initial;
    return loan.toFixed(2);
}

var form = document.getElementById("loanForm");
form.addEventListener("submit", getLoanInfo);