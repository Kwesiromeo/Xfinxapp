document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const mainScreen = document.getElementById('main-screen');
    const loginScreen = document.getElementById('login-screen');
    const userNameDisplay = document.getElementById('user-name');

    userNameDisplay.textContent = username;
    loginScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
});

let balance = 0;

document.getElementById('save-button').addEventListener('click', function () {
    const amount = prompt("Enter the amount to save:");
    if (amount && !isNaN(amount) && amount > 0) {
        balance += parseFloat(amount);
        updateBalance();
    } else {
        alert("Please enter a valid amount.");
    }
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = prompt("Enter the amount to withdraw:");
    if (amount && !isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= parseFloat(amount);
        updateBalance();
    } else {
        alert("Invalid amount or insufficient balance.");
    }
});

function updateBalance() {
    document.getElementById('account-balance').textContent = balance.toFixed(2);
}