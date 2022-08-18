function getElementFromInputField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementFromTextField(textId) {
    const textField = document.getElementById(textId);
    const textFieldString = textField.innerText;
    const textFieldValue = parseFloat(textFieldString);
    return textFieldValue;
}

function totalValueAdd(textId, newValue) {
    const totalAmount = document.getElementById(textId);
    totalAmount.innerText = newValue;
}
