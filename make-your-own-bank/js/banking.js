//get input value
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //clear the deposit input field
  inputField.value = "";
  return amountValue;
}

//update total
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  //update new deposit total
  totalElement.innerText = previousTotal + amount;
}

//get current balance
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const BalanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(BalanceTotalText);
  return previousBalanceTotal;
}

//update balance
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

//handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const newDepositAmount = getInputValue("deposit-input");
    if (newDepositAmount > 0) {
      updateTotalField("deposit-total", newDepositAmount);
      updateBalance(newDepositAmount, true);
    }

    //get the amount deposited
    /*  const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */

    //get previous deposit total
    /* const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    //update new deposit total
    depositTotal.innerText = previousDepositAmount + newDepositAmount; */

    //update account balance
    //get previous balance total
    /*  const balanceTotal = document.getElementById("balance-total");
    const BalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(BalanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + newDepositAmount; */
  });

//handel withdraw event handler

//get the  withdraw amount
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
      updateTotalField("withdraw-total", newWithdrawAmount);
      updateBalance(newWithdrawAmount, false);
    }

    /* const withdrawInput = document.getElementById("withdraw-input");
    const WithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(WithdrawAmountText); */

    //get previous withdraw amount
    /*  const withdrawAmount = document.getElementById("withdraw-total");
    const previousWithdrawTotalText = withdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalText);
    //update withdraw amount
    withdrawAmount.innerText = newWithdrawAmount + previousWithdrawAmount; */

    //update balance
    /*  const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount; */
  });
