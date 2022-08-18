document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawValue = getElementFromInputField('withdraw-field');
    const previousWithdrawtValue = getElementFromTextField('withdraw-total');


    if (isNaN(newWithdrawValue)) {
        alert('please enter correct amount');
        return;
    }

    const previousBalance = getElementFromTextField('balance-total');

    if (newWithdrawValue > previousBalance) {
        alert('Insufficient Balance');
        return;
    }
    const totalWithdraw = previousWithdrawtValue + newWithdrawValue;
    totalValueAdd('withdraw-total', totalWithdraw);

    const newTotalBalanc = previousBalance - newWithdrawValue;
    totalValueAdd('balance-total', newTotalBalanc);

})