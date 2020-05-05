# конвертер валют.
#### html
```html
<body>
    <label for="rub">RUB</label>
    <input id='rub' type="text">
    <label for="usd">USD</label>
    <input id='usd' type="text">
    <script src='script.js'></script>
</body>
```
#### js
##### Получил со страницы 2 элемента:
```javascript
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
```                                      
#### Создал объект:
```javascript
let request = new XMLHttpRequest();
```
#### создал current.json из него буду получать курс:
```javascript
    "usd": 74
```
#### после создания XMLHttpRequest, использовал метод open настройка ajax запроса, и первый метод GET получение данных с сервера:
```javascript
request.open('GET', 'current.json');
```
#### //setRequestHeader настройка http запросов:
```javascript
request.setRequestHeader('content-type', 'application/json; charset=utf-8'); 
```
#### и последний этап send открывает соединение и отправляет запрос на сервер:
```javascript
request.send();
```
#### повесил обработчик событий addEventListener на request, который будет отслеживать состояние запроса по следующим параметрам: 1.readyState по текущему состоянию(4 это done операция полностью завершена) и запроса по статусу(все ОК)
```javascript
if (request.readyState === 4 && request.status == 200
```
#### получаем ответ от сервера и расшифровываем с помощью метода parse:
```javascript
let date = JSON.parse(request.response);
```
#### далее простая математика, в инпут inputUsd помещаю значение деления:
```javascript
inputUsd.value = inputRub.value / date.usd;
```
