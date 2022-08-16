document.getElementById('deposit-btn').addEventListener("click", function() {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);
    const currentDepositElement = document.getElementById('current-deposit');
    const currentDepositAmount = parseFloat(currentDepositElement.innerText);
    const totalDepositAmount = depositAmount + currentDepositAmount;
    currentDepositElement.innerText = totalDepositAmount;



    const currentBalanceElement = document.getElementById('current-balance');
    const currentBalance = parseFloat(currentBalanceElement.innerText);
    const totalBalance = currentBalance + depositAmount;
    currentBalanceElement.innerText = totalBalance;

    // Clear The Deposit Field
    depositField.value = '';

})