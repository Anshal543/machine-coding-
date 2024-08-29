const baseURL = 'https://random.imagecdn.app/';
const container = document.querySelector(".content")

let row = 7
for (let i = 0; i < row * 3; i++) {
    const image = document.createElement('img')
    image.src = `${baseURL}${randomSize()}`
    container.appendChild(image)
}

function randomSize() {
    return `${randomNumber()}/${randomNumber()}`
}

function randomNumber() {
    return Math.floor(Math.random() * 10) + 300
}