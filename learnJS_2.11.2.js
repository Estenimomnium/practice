let login = prompt('Введите логин:', '');

if (login == 'Админ') {
    let password = prompt('Введите пароль:', '');
    if (password == 'Я главный') {
        alert('Здравствуйте админ!');
    } else if (password == '' || password == null){
        alert('Отмена');
    } else {
        alert('Неверный пароль');
    }
} else if (login == '' || login == null) {
    alert('Отмена');
} else {
    alert('Пользователь не обнаружен');
}
