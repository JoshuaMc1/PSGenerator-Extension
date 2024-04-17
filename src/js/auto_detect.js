let passwordFields = document.querySelectorAll('input[type="password"]');
let defaultOptions = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
}

passwordFields.forEach(function (field) {
    let generateButton = document.createElement('button');

    generateButton.classList.add('psg-btn');
    generateButton.setAttribute('title', 'Generar contraseña');

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    svg.setAttribute('class', 'psg-w-6 psg-h-6 psg-text-white');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('viewBox', '0 0 24 24');

    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z');
    path.setAttribute('clip-rule', 'evenodd');

    svg.appendChild(path);
    generateButton.appendChild(svg);

    generateButton.addEventListener('click', function () {
        field.value = generatePassword(randomLength(), defaultOptions);
    });

    field.parentNode.insertBefore(generateButton, field.nextSibling);
});

function generatePassword(length, options) {
    let characters = '';
    let result = '';

    if (options.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (options.numbers) characters += '0123456789';
    if (options.symbols) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

function randomLength() {
    return Math.floor(Math.random() * (25 - 8 + 1) + 8);
}