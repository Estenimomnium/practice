// ПЕРЕМЕННЫЕ
//var message; // Названия переменных могут состоять из.... a-z, A-Z, 0-9, $, _ ; (Не могут начинаться с цифр)
//var myMessage;
//MyMessage = "Hi, JavaScript";

//var nummber = 440;
//var string = "Учись еблан!";
//var boolean = true;
//var myNull = null;
//var myUndefined = undefined;
//var myObject = {
//    name: "Ilya",
//    age: 25
//};

// ЧИСЛА
//console.log(10 + nummber);
//nummber += 10; // увеличить переменную на 10
//nummber++; // увеличение значения, которое хранится в переменной nummber на единицу
//console.log(nummber);

//console.log(Math.round(5.45)); // Метод Math.round() округляет до целого
//console.log(Math.ceil(5.45)); // Всегда окргугляет в большую сторону
//console.log(Math.floor(5.45)); // Округляет в меньшую сторону


//var newNumber = 2.437;
//console.log(newNumber.toFixed(1)); // Один знак после запятой. (делает математическое округление)

//var x = 8.45;
//console.log(Math.round(x));

// СТРОКИ 
//myString = "УЧИСЬ СУКА!";
//console.log("40", + nummber);
//console.log(myString.toLowerCase()); // Метод позволяет преобразовать в нижний регистр
//console.log(myString.toUpperCase()); // Верхний регистр

// МАССИВЫ
//var names = ["Вася", "Петя", "Женя"]; // Пустой массив присвоили переменной names
//console.log(names[1].toUpperCase());

//names[0] = "Маша"; // Маша заменит Васю в массиве
//console.log(names[0]);

//names.push("Света"); // Метод push позволяет добавить элемент в конец массива
//console.log(names); // Просмотреть весь массив

//УСЛОВИЯ 
//if (10 > 5) {
//    console.log("Условие выполнилось!");
//} else {
//    console.log("Nain");
//}

// ЦИКЛЫ
//for (var i = 0; i < 10; i++) { // После того как выполнен блок кода - будет выполнен третий шаг, а именно i++
//    console.log(i);
//}

//for (var i = 0; i < 10; i++) {
//    if (i == 5) {
//        continue;
//    }
//    console.log(i);
//}

//for (var j = 0; j < names.length; j++ ) {
//    console.log(names[j].toUpperCase());
//}
//var i = 0;
//while (i < 10) {
//    console.log(i);
//    i++;
//}

//ФУНКЦИИ
//function test() { // если функцию объявить, но не вызвать, то ничего не произойдет
//    console.log("УЧИСЬ БЛЕАТЬ!");
//}

//test();

//function sum(x, y) {
//   return x + y;
//}

//var result = sum(10, 59);
//console.log(result);

// ОБЪЕКТЫ

//var myObject = {
//    name: "УЧИСЬ",
//    surname: "СУКА!",
//    age: 25,
//    getFullName: function() {
//        return this.name + " " + this.surname;
//    }
//};

//myObject.name = "ГЕРАЛЬТ";
//console.log(myObject.name);
//console.log(myObject.getFullName());