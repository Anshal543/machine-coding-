const cursor = document.querySelector('.cursor');
// an array of 10 colors in hex value
const colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
];

document.addEventListener("mousemove", (event) => {
    cursorMove(event.pageX, event.pageY)
})

function cursorMove(pageX, pageY) {
    cursor.style.left = pageX + "px"
    cursor.style.top = pageY + "px"

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    cursor.style.backgroundColor = randomColor
}