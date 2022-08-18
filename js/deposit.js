document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositValue = getElementFromInputField('deposit-field');
    const previousDepositValue = getElementFromTextField('deposit-total');

    if (isNaN(newDepositValue)) {
        alert('please enter correct amount');
        return;
    }

    const totalDeposit = previousDepositValue + newDepositValue;
    totalValueAdd('deposit-total', totalDeposit);

    const previousBalance = getElementFromTextField('balance-total');
    const newTotalBalance = previousBalance + newDepositValue;
    totalValueAdd('balance-total', newTotalBalance);

})
