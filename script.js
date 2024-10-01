const transactionList = document.getElementById('transactionList');
const totalIncomeDisplay = document.getElementById('totalIncome');
const totalExpenseDisplay = document.getElementById('totalExpense');
const balanceDisplay = document.getElementById('balance');
const addTransactionButton = document.getElementById('addTransaction');

let totalIncome = 0;
let totalExpense = 0;

addTransactionButton.addEventListener('click', function() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (description === '' || isNaN(amount)) {
        alert('Please enter a valid description and amount.');
        return;
    }

    const transaction = document.createElement('li');
    transaction.textContent = `${description}: ₹${amount.toFixed(2)} (${type})`;
    transactionList.appendChild(transaction);

    if (type === 'income') {
        totalIncome += amount;
    } else {
        totalExpense += amount;
    }

    updateSummary();
    clearInputs();
});

function updateSummary() {
    totalIncomeDisplay.textContent = totalIncome.toFixed(2);
    totalExpenseDisplay.textContent = totalExpense.toFixed(2);
    balanceDisplay.textContent = (totalIncome - totalExpense).toFixed(2);
}

function clearInputs() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}
