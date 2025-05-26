var text = document.getElementById("text_details");
var amount = document.getElementById("amount_details");
var history_div = document.getElementById("historybox");
var income = document.getElementById("income");
var expense = document.getElementById("expense");
var balance = document.getElementById('balance');
document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault()
    if (text.value == "" || amount.value == "") {
        alert("Enter appropriate values");
        
    }
    else if (Number(amount.value) > 0) {
        income.innerText = Number(income.innerText) + Number(amount.value);
        balance.innerText = Number(balance.innerText) + Number(amount.value);
        history_div.innerHTML += `
            <p>${text.value} </p>
            <p>${amount.value}</p>
            `;
    }
    else {
        expense.innerText = Number(expense.innerText) + Number(amount.value);
        balance.innerText = Number(balance.innerText) - Math.abs(Number(amount.value));
    }
    text.value = "";
    amount.value = "";
});