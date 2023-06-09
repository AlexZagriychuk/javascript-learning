import { Validator } from "./Validator.js"

const statusMessageElem = document.getElementById("status-message")

document.getElementById("validate-email").addEventListener("click", event => {
    let emailValue = document.getElementById("email").value
    
    if(Validator.isEmail(emailValue)) {
        statusMessageElem.textContent = `Email '${emailValue}' is valid`
        statusMessageElem.style.color = "green"
    } else {
        statusMessageElem.textContent = `Email '${emailValue}' is not valid`
        statusMessageElem.style.color = "red"
    }
})

document.getElementById("validate-date").addEventListener("click", event => {
    let dateValue = document.getElementById("date").value
    
    if(Validator.isDate(dateValue)) {
        statusMessageElem.textContent = `Date '${dateValue}' is valid`
        statusMessageElem.style.color = "green"
    } else {
        statusMessageElem.textContent = `Date '${dateValue}' is not valid`
        statusMessageElem.style.color = "red"
    }
})

document.getElementById("validate-required-data").addEventListener("click", event => {
    let requiredDataValue = document.getElementById("required-data").value
    
    if(Validator.isRequired(requiredDataValue)) {
        statusMessageElem.textContent = `Required data '${requiredDataValue}' is valid`
        statusMessageElem.style.color = "green"
    } else {
        statusMessageElem.textContent = `Required data '${requiredDataValue}' is not valid`
        statusMessageElem.style.color = "red"
    }
})
