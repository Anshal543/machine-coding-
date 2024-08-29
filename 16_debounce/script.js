// https://randomuser.me/api/?result=1

const userInput = document.getElementById('user-input')
const userCard = document.getElementById('user-card')

// userInput.addEventListener('input',fetchRandomUser)
userInput.addEventListener('input', debounce(fetchRandomUser, 500))
function fetchRandomUser() {
    const inputValue = userInput.value
    if (inputValue.length > 0) {
        console.log("called");
        fetch('https://randomuser.me/api/?result=1')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('http Error')
                }
                return response.json()
            })
            .then((data) => displayUser(data.results[0]))
            .catch((error) => console.error(`error:${error}`))
    }
}

function displayUser(user) {
    userCard.style.display = 'block'
    userCard.innerHTML = `<img src="${user.picture.large}"/><p>${user.email}</p>`
}

function debounce(func, delay) {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}