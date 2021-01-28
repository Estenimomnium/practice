let a = "19 October 1909 10:27";
let b = "28 March 1909 00:59";

let date1 = new Date(a);
let date2 = new Date(b);

let daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

if (date1 > date2) {
    return(daysWeek[date1.getDay()]); 
} else {
    return(daysWeek[date2.getDay()]);
}