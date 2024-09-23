// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js


document.addEventListener('DOMContentLoaded', () => {
    const userNameInput = document.getElementById('userNameInput');
    const getUserButton = document.getElementById('getUserButton');
    const userCitySpan = document.getElementById('userCity');

    let usersData = [];
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            usersData = users;
        })
        .catch(error => console.error('Error fetching user data:', error));

    getUserButton.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        const user = usersData.find(user => user.name.toLowerCase() === userName.toLowerCase());

        if (user) {
            userCitySpan.textContent = user.address.city;
        } else {
            userCitySpan.textContent = 'User not found';
        }
    });
});
