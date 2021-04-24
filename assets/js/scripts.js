let form = document.getElementById("transaction-form")
let balanceAmount = document.getElementById("account-balance")
let transactionLog = document.getElementById("transactionLog")
let balance = 0
let transactionNumber = 0
form.onsubmit = (e) => {

    let type;
    if(e.target["transaction-type"].value === "1"){
        type = "Deposit"
    }  else {
        type = "Withdraw"
    }

    let transaction = {
        type: type ,
        amount: 5
    }
    console.log(transaction)
    console.log(e.target["transaction-type"].value)
    console.log(e.target.amount.value)

    e.preventDefault()
}

function handleTransaction(transaction){
    transactionNumber += 1
    console.log(transaction)
    console.log(balance)
    if(transaction.type === "Deposit") {
        balance += transaction.amount
    } else {
        balance -= transaction.amount
    }
    console.log(balance)

}

function renderBalance() {
    balanceAmount.innerText = `$ ${balance}`
    balanceAmount.style.color = balance >= 0 ? `#9AB278` : `#FE4C58`
}

function renderTransactionTable(){

    let demoObj = {
        id: 0,
        amount: 500,
        preBalance: 0,
        postBalance: 500
    }

    let tableRow = document.createElement('tr')
    let tID = document.createElement('th')
    let tAmount = document.createElement('td')
    let preBalance = document.createElement('td')
    let postBalance = document.createElement('td')
    
    tID.innerText = demoObj.id


// demoobj.amount


    tableRow.appendChild(tID)
    tableRow.appendChild(tAmount)
    tableRow.appendChild(preBalance)
    tableRow.appendChild(postBalance)

    transactionLog.appendChild(tableRow)
}
renderTransactionTable()