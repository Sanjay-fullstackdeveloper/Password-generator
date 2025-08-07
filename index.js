let range = document.getElementById('range');
let rangevalue = document.getElementById('rangevalue');
let passbox = document.getElementById('passbox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genbtn = document.getElementById('genbtn');

rangevalue.textContent = range.value;
range.addEventListener('input', () => {
    rangevalue.textContent = range.value;
});

genbtn.addEventListener('click', () => {
    passbox.value = generatepassword();
});

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*?,.";

function generatepassword() {
    let genpassword = "";
    let allchars = "";

    if (uppercase.checked) allchars += upper;
    if (lowercase.checked) allchars += lower;
    if (numbers.checked) allchars += allnumbers;
    if (symbols.checked) allchars += allsymbols;

    if (allchars.length === 0) return genpassword;

    let length = parseInt(range.value);
    for (let i = 0; i < length; i++) {
        genpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    }
    return genpassword;
}
