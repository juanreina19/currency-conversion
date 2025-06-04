import { fetchCurrencies, convertCurrency } from './model.js';
import { renderCurrencyOptions, showResult } from './view.js';

const form = document.getElementById('converter-form');
const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const resultDiv = document.getElementById('result');

async function init() {
    const currencies = await fetchCurrencies();
    renderCurrencyOptions(fromSelect, currencies);
    renderCurrencyOptions(toSelect, currencies);

    // Establece por defecto USD y EUR
    fromSelect.value = 'USD';
    toSelect.value = 'EUR';
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (from === to) {
        resultDiv.textContent = 'Las monedas deben ser diferentes';
        return;
    }

    const converted = await convertCurrency(amount, from, to);
    showResult(resultDiv, amount, from, converted, to);
});

init();