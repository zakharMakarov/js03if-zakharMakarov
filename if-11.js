// (Использовать switch/case. Массивы, операторы if не использовать.)
// Написать функцию WeekdayName(n), которая по целому числу n — но-
// меру дня недели, дает название этого дня
// WeekdayName(1) = "понедельник", WeekdayName(2) = "вторник", ...
// Для n > 7 или n < 1 функция должна возвращать пустую строку.

function WeekdayName(n){
    switch(n){
        case 1:{
            return "Понедельник";
        }
        case 2:{
            return "Вторник";
        }
        case 3:{
            return "Среда";
        }
        case 4:{
            return "Четверг";
        }
        case 5:{
            return "Пятница";
        }
        case 6:{
            return "Суббота";
        }
        case 7:{
            return "Воскресенье";
        }
    }
}

module.exports = WeekdayName;