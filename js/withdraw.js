document.getElementById('withdraw-btn').addEventListener("click", function() {

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);

    const currentWithdrawElement = document.getElementById('current-withdraw');
    const currentWithdrawAmount = parseFloat(currentWithdrawElement.innerText);

    const totalWithdrawAmount = withdrawAmount + currentWithdrawAmount;
    currentWithdrawElement.innerText = totalWithdrawAmount;


    const currentBalanceElement = document.getElementById('current-balance');
    const currentBalance = parseFloat(currentBalanceElement.innerText);
    const totalBalance = currentBalance - withdrawAmount;
    currentBalanceElement.innerText = totalBalance;

    // // Clear The withdraw Field
    withdrawField.value = '';

})