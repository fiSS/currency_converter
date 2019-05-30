конвертер валют.
создал current.json(из этого файла будет получен текущий курс валют)туда поместил объек: {
    "usd": 64
}
    Получил со страницы 2 элемента:
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
                                      
на inputRub с помощью обработчика событий навесил событие input, чтобы при введение определенного символа применялась конвертация в другую валюту.

Создал объект: let request = new XMLHttpRequest();
С помощью метода  GET', 'current.json'
