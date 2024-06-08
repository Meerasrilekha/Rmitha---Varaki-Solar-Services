document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate-button');
    const includeLoanCheckbox = document.getElementById('include-loan');
    const loanInputs = document.querySelector('.loan-inputs');
    const costSlider = document.getElementById('cost-slider');
    const costValue = document.getElementById('cost-value');

    includeLoanCheckbox.addEventListener('change', () => {
        if (includeLoanCheckbox.checked) {
            loanInputs.style.display = 'block';
        } else {
            loanInputs.style.display = 'none';
        }
    });

    costSlider.addEventListener('input', () => {
        costValue.textContent = costSlider.value;
    });

    calculateButton.addEventListener('click', () => {
        const panelCapacity = parseFloat(document.getElementById('panel-capacity').value);
        const roofArea = parseFloat(document.getElementById('roof-area').value);
        const budget = parseFloat(document.getElementById('budget').value);
        const state = document.getElementById('state').value;
        const customerCategory = document.getElementById('customer-category').value;
        const electricityCost = parseFloat(document.getElementById('electricity-cost').value);
        const includeLoan = includeLoanCheckbox.checked;

        let loanAmount, loanTerm, interestRate;
        if (includeLoan) {
            loanAmount = parseFloat(document.getElementById('loan-amount').value);
            loanTerm = parseFloat(document.getElementById('loan-term').value);
            interestRate = parseFloat(document.getElementById('interest-rate').value);
        }
        let annualSavings = (panelCapacity * 365 * electricityCost * 0.001 * 24) - (budget / loanTerm);
        document.getElementById('results-container').innerHTML = `
            <h3>Results:</h3>
            <p>Annual Savings: Rs ${annualSavings.toFixed(2)}</p>
        `;
    });
});
