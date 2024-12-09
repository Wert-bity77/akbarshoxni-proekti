
var num1 = parseFloat(prompt("raqam yozing ozingiz hohlagan:"));
var operator = prompt("Bittasini tanlang 1)+, 2)-, 3)*, 4)/");
var num2 = parseFloat(prompt("ozingiz hohlagan raqammi yozing:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("iltimos togri son kirgizing.");
} else if (!['1', '2', '3', '4'].includes(operator)) {
    alert("to'gri aperatirrini kiriting (1, 2, 3 yoki 4).");
} else {
    var container = document.createElement('div');
    container.style.backgroundColor = "#fff";
    container.style.borderRadius = "10px";
    container.style.padding = "30px";
    container.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    container.style.textAlign = "center";
    container.style.width = "300px";
    document.body.appendChild(container);

    var title = document.createElement('h1');
    title.innerText = "Калькулятор";
    title.style.marginBottom = "20px";
    title.style.fontSize = "24px";
    title.style.color = "#007bff";
    container.appendChild(title);

    var inputContainer = document.createElement('div');
    inputContainer.style.marginBottom = "20px";
    container.appendChild(inputContainer);

    var num1Input = document.createElement('input');
    num1Input.value = num1;
    num1Input.disabled = true; 
    num1Input.style.width = "100%";
    num1Input.style.padding = "10px";
    num1Input.style.marginBottom = "10px";
    num1Input.style.border = "2px solid #ddd";
    num1Input.style.borderRadius = "5px";
    num1Input.style.fontSize = "16px";
    inputContainer.appendChild(num1Input);

    var operatorSelect = document.createElement('select');
    operatorSelect.disabled = true; 
    operatorSelect.innerHTML = `
        <option value="1" ${operator == '1' ? 'selected' : ''}>+</option>
        <option value="2" ${operator == '2' ? 'selected' : ''}>-</option>
        <option value="3" ${operator == '3' ? 'selected' : ''}>*</option>
        <option value="4" ${operator == '4' ? 'selected' : ''}>/</option>
    `;
    operatorSelect.style.width = "100%";
    operatorSelect.style.padding = "10px";
    operatorSelect.style.marginBottom = "10px";
    operatorSelect.style.border = "2px solid #ddd";
    operatorSelect.style.borderRadius = "5px";
    operatorSelect.style.fontSize = "16px";
    inputContainer.appendChild(operatorSelect);

    var num2Input = document.createElement('input');
    num2Input.value = num2;
    num2Input.disabled = true; 
    num2Input.style.width = "100%";
    num2Input.style.padding = "10px";
    num2Input.style.marginBottom = "10px";
    num2Input.style.border = "2px solid #ddd";
    num2Input.style.borderRadius = "5px";
    num2Input.style.fontSize = "16px";
    inputContainer.appendChild(num2Input);

    var button = document.createElement('button');
    button.innerText = "Вычислить";
    button.style.width = "100%";
    button.style.padding = "12px";
    button.style.backgroundColor = "#007bff";
    button.style.color = "white";
    button.style.fontSize = "18px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";
    container.appendChild(button);

    var resultText = document.createElement('h3');
    resultText.innerText = "Результат: ";
    var result = document.createElement('span');
    resultText.appendChild(result);
    result.style.fontWeight = "bold";
    result.style.color = "#007bff";
    container.appendChild(resultText);

    button.addEventListener('click', function() {
        var resultValue;

        if (operator === '1') {
            resultValue = num1 + num2;
        } else if (operator === '2') {
            resultValue = num1 - num2;
        } else if (operator === '3') {
            resultValue = num1 * num2;
        } else if (operator === '4') {
            if (num2 === 0) {
                alert("На ноль делить нельзя.");
                return;
            }
            resultValue = num1 / num2;
        }

        result.innerText = resultValue;
    });
}

