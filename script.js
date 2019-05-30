let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
    
    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest();

        //request.open(method, url, async, login, pass); //запрос к серверу(метод, url, логин и пароль)
        request.open('GET', 'current.json');
        request.setRequestHeader('content-type', 'application/json; charset=utf-8');
        request.send(); //send запускает запрос и он идёт за ответом к серверу
        
        //https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readystate  Свойство XMLHttpRequest.readyState
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status == 200) {
                let date = JSON.parse(request.response);

                inputUsd.value = inputRub.value / date.usd;
            } else {
                inputUsd.value = "что-то пошло не так!";
            }
        });
    });
