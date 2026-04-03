Что такое Fetch?
Fetch - это встроенный в браузер метод для сетевых основан на Promise (обещаниях), что делает код асинхронным и для чтения.

Базовый синтаксис
Простейший GET-запрос:
```javascript

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error ('Ошибка:', error))
    .finally(()=>{
        console.log('запрос завершен')
})
```

С использованием async/await (рекомендуется):
```javascript
async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
  finally {
    console.log('запрос завершен')
  }
}

getData();
```
Методы запросов
Fetch поддерживает все стандартные HTTP-методы .
GET (получение данных)
```javascript
const response = await fetch('https://api.example.com/users');
const users = await response.json();
```
POST (создание данных)
```javascript
const response = await fetch('https://api.example.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Иван',
    email: 'ivan@example.com'
  })
});
```

PUT (обновление данных)
```javascript
const response = await fetch('https://api.example.com/users/16', {
  method: 'PUT',
  body: JSON.stringify({ name: 'Пётр' })
});
```

DELETE (удаление данных)
```javascript
const response = await fetch('https://api.example.com/users/1', {
  method: 'DELETE'
});
```