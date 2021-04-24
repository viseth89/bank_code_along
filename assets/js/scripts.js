let button = document.getElementById("transaction-button")
button.onclick = (e) => {
    e.preventDefault()
    console.log("button")
}



let form = document.getElementById("transaction-form")
form.onsubmit = (e) => {
    console.log(e.target["transaction-type"].value)
    console.log(e.target.amount.value)
}