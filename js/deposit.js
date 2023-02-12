// step-1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    // get the deposit amount from the deposit inout fiel
    // for input field use .value to the value the input field
    const depositFiled = document.getElementById('deposit-filed');
    const newdepositAmountString = depositFiled.value;
    const newdepositAmount = parseFloat(newdepositAmountString);

    // step 3: get the current deposit total
    // for no-input (elemnt other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);
    console.log(typeof previousdepositTotal);

    // step 4: add numbers to set the total deposit
    const currentDepositTotal = previousdepositTotal + newdepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get ballance current total
    const balnceTotalElement = document.getElementById('balnce-total');
    const previousBalanceTotalString = balnceTotalElement.innerText;
    const prociousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = prociousBalanceTotal + newdepositAmount;
    // set the total blance 
    balnceTotalElement.innerText = currentBalanceTotal;

    // step 7: clear the deposit field
    depositFiled.value = '';
});
