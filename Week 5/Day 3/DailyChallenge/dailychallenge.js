// Fetch supported currencies and populate dropdowns
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const form = document.getElementById('converter-form');
const switchBtn = document.getElementById('switch-btn');

const API_KEY = 'd055bfd372e832b2a11dbe45'; // Replace with your actual API key
const BASE_URL = 'https://v6.exchangerate-api.com/v6/' + API_KEY;

async function fetchSupportedCurrencies() {
    const res = await fetch(`${BASE_URL}/codes`);
    const data = await res.json();
    return data.supported_codes;
}

function populateDropdown(dropdown, codes) {
    dropdown.innerHTML = '';
    codes.forEach(([code, name]) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} - ${name}`;
        dropdown.appendChild(option);
    });
}

async function init() {
    const codes = await fetchSupportedCurrencies();
    populateDropdown(fromCurrency, codes);
    populateDropdown(toCurrency, codes);
    fromCurrency.value = 'USD';
    toCurrency.value = 'EUR';
}

async function convertCurrency(from, to, amount) {
    const res = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
    const data = await res.json();
    return data.conversion_result;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = amountInput.value;
    resultDiv.textContent = 'Converting...';
    try {
        const result = await convertCurrency(from, to, amount);
        resultDiv.textContent = `${result} ${to}`;
    } catch (err) {
        resultDiv.textContent = 'Error converting currency.';
    }
});

switchBtn.addEventListener('click', async () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    // Trigger conversion with switched values
    form.dispatchEvent(new Event('submit'));
});

init(); 