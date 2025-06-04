export async function fetchCurrencies() {
    const res = await fetch('https://api.frankfurter.app/currencies');
    return res.json();
}

export async function convertCurrency(amount, from, to) {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
    const data = await res.json();
    return data.rates[to];
}