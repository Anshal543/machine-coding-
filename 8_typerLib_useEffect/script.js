const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];
let newLetterDelay = 600;
let typingDelay = 200;
let erasingDelay = 200;
document.addEventListener('DOMContentLoaded', () => {
    if (words.length) {
        setTimeout(type, newLetterDelay);
    }
});
let charIndex = 0;
let index = 0;

function type() {
    if (charIndex < words[index].length) {
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        index++;    
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(type, newLetterDelay);
    }
}
