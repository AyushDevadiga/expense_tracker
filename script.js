var balance = 0;
var income = 0;
var expense = 0;
var history= document.getElementById('history');

function addTransaction() {
    var amount = document.getElementById("amountInput").value;
    
    var text = document.getElementById("textInput").value; 
    if (text == "" || amount == "") {
    alert("Please fill out both the text and amount fields.");
     
    
     }else{
    var number = eval(amount);

    if (number > 0) {
        income = income + number;
        showHistory(text,amount);
    } else {
        expense = expense + number; 
    }

    balance = balance + number;

    document.getElementById("income").innerText = "₹" + income;
    document.getElementById("expense").innerText = "₹" + expense;
    document.getElementById("amount").innerText = "₹" + balance;

    
    document.getElementById("textInput").value = "";
    document.getElementById("amountInput").value = "";
    
}
    

    
}



function showHistory(text,amount){
    alert('haa');
    history.innerHTML+=`

    <div class="history_button">
                <p>${text}</p>
                <p>${amount}</p>
            </div>


    
    
    `;
    
    
    

}
