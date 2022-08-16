document.getElementById('withdraw-btn').addEventListener("click", function() {

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);

    const currentWithdrawElement = document.getElementById('current-withdraw');
    const currentWithdrawAmount = parseFloat(currentWithdrawElement.innerText);

    // const totalWithdrawAmount = withdrawAmount + currentWithdrawAmount;
    // currentWithdrawElement.innerText = totalWithdrawAmount;




    const currentBalanceElement = document.getElementById('current-balance');
    const currentBalance = parseFloat(currentBalanceElement.innerText);
    const totalBalance = currentBalance - withdrawAmount;
    if (totalBalance < 0) {
        alert('insufficient balance!! Please check your Balance . ');
    } else {
        const totalWithdrawAmount = withdrawAmount + currentWithdrawAmount;
        currentWithdrawElement.innerText = totalWithdrawAmount;
        currentBalanceElement.innerText = totalBalance;
    }


    // // Clear The withdraw Field
    withdrawField.value = '';

})