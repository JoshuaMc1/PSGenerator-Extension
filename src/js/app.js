import { generatePassword } from "./util-min.js";

document.addEventListener('DOMContentLoaded', () => {
    const passwordDisplay = document.querySelector('#password-display');
    const passwordLength = document.querySelector('#password-length');
    const passwordLengthDisplay = document.querySelector('#password-length-display');
    const uppercase = document.querySelector('#uppercase');
    const lowercase = document.querySelector('#lowercase');
    const numbers = document.querySelector('#numbers');
    const symbols = document.querySelector('#symbols');
    const alert = document.querySelector('#alert');

    const generatePasswordButton = document.querySelector('#generate-password');

    let options = {
        uppercase: false,
        lowercase: true,
        numbers: false,
        symbols: false
    };

    const showAlert = (message = '', type = 'info') => {
        let types = {
            'error': 'bg-red-500',
            'info': 'bg-sky-500',
        }

        alert.classList.remove('hidden');

        alert.classList.add(types[type]);

        alert.querySelector('span').textContent = '';
        alert.querySelector('span').textContent = message;

        setTimeout(() => {
            alert.classList.add('hidden');
        }, 3000);
    }

    passwordLength.addEventListener('input', (e) => {
        passwordLengthDisplay.textContent = e.target.value;
    });

    uppercase.addEventListener('change', (e) => {
        options.uppercase = e.target.checked;
    });

    lowercase.addEventListener('change', (e) => {
        options.lowercase = e.target.checked;
    });

    numbers.addEventListener('change', (e) => {
        options.numbers = e.target.checked;
    });

    symbols.addEventListener('change', (e) => {
        options.symbols = e.target.checked;
    });

    generatePasswordButton.addEventListener('click', () => {
        if (passwordLength.value < 8 || passwordLength.value > 25) {
            showAlert('Por favor, introduce un número entre 8 y 25', 'error');
            return;
        }

        if (!options.uppercase && !options.lowercase && !options.numbers && !options.symbols) {
            showAlert('Por favor, selecciona una opción', 'error');
            return;
        }

        const generatedPassword = generatePassword(passwordLength.value, options);

        passwordDisplay.textContent = '';
        passwordDisplay.textContent = generatedPassword;
    });

    passwordDisplay.addEventListener('click', () => {
        navigator.clipboard.writeText(passwordDisplay.textContent);
        showAlert('Copiado al portapapeles');
    });
});