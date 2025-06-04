export function renderCurrencyOptions(select, currencies) {
    select.innerHTML = '';
    for (const code in currencies) {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} - ${currencies[code]}`;
        select.appendChild(option);
    }
}

export function showResult(resultElement, amount, from, converted, to) {
    resultElement.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}