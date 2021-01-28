// метод search(regexp) возвращает номер позиции, с которой найдено соответсвие шаблону, либо "-1" если соответсвие не найдено

//let myString = "This is just test string";

// result = myString.search(/is/);
// alert(result);

// метод replace(regexp, newString) операция поиска с заменой

// let myString = "This is just test string";

// result = myString.replace(/is/g, 'as' ); // флаг g позволяет поменять все найденные соответсвия 
// alert(result);

let s = "Andsirdaarrevarariarewbutovearrmararan";

let sub_s = "ar";
sub_s2 = new RegExp(sub_s, "g");

result = s.match(sub_s2);
x = result.join();
alert(x);
