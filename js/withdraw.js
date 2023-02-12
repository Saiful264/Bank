/*
1. add event handler with the withdraw button
2. get the withdraw amount form the withdraw imput find
2.5 also make sure to convert the input a number by useing parseFloat
3.  Get prevuius withdraw total
4. calculate total withdraw amount
5. set totla withdraw total
6. calculate new blance total
6-5 : set the new blance total
7. clear the input field
*/

//step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawFind = document.getElementById('withdraw-field');
    const newWithdrawFindString = withdrawFind.value;
    const newWithdrawAmount = parseFloat(newWithdrawFindString);

      // step 7
      withdrawFind.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }
    //step-3
    const withTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    
    // step 5
    const blanceTotalElement = document.getElementById('balnce-total');
    const previousBalanceTotalString = blanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank eto take nai');
        return;
    }
    // step 4 
    const currentWithdrawtotal = previousWithdrawTotal + newWithdrawAmount;
    withTotalElement.innerText = currentWithdrawtotal;

    //step 6
    const newBlanceTotla = previousBalanceTotal - newWithdrawAmount;
    blanceTotalElement.innerText = newBlanceTotla;


})