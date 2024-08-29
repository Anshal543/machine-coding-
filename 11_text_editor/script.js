const inputField = document.getElementById("input-field")
const outputField = document.getElementById("output-field")
const buttons = document.querySelectorAll('button')

inputField.addEventListener('keyup', () => {
    outputField.innerHTML = inputField.value
})

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('uppercase')) {
            // outputField.innerHTML = outputField.value.toUpperCase()
            outputField.style.textTransform = outputField.style.textTransform === 'uppercase' ? 'none' : 'uppercase'
        } else if (btn.classList.contains('capitalize')) {
            // outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1)
            let text = outputField.innerHTML.split(' ')
            let newText = text.map((word) => {
                return word.charAt(0).toUpperCase() + word.slice(1)
            })
            outputField.innerHTML = newText.join(' ')
        } else if (btn.classList.contains('lowercase')) {
            outputField.innerHTML = outputField.innerHTML.toLowerCase()
        } else if (btn.classList.contains('bold')) {
            outputField.style.fontWeight = outputField.style.fontWeight === 'bold' ? 'normal' : 'bold'
        } else if (btn.classList.contains('italic')) {
            outputField.style.fontStyle = outputField.style.fontStyle === 'italic' ? 'normal' : 'italic'
        } else if (btn.classList.contains('underline')) {
            outputField.style.textDecoration = outputField.style.textDecoration === 'underline' ? 'none' : 'underline'
        }

    })
})
