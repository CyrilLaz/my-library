# my-library

Многостраничный интерфейс для работы с сущностью «книга» с использованием шаблонизатора [ejs](https://www.npmjs.com/package/ejs).

Подсчет количества запросов за книгой осуществляется отдельным [приложением](https://github.com/CyrilLaz/api-counter) на основе Redis и Express.\
Для осуществления запросов используется [axios](https://www.npmjs.com/package/axios).\
В `dev` режиме устанавливается зависимость [nodemon](https://www.npmjs.com/package/nodemon).

## Routers

 - Просмотр списка всех книг (вывод заголовков):\
    `[hostname]:[port]\books`

- Информация по конкретной книге:\
    `[hostname]:[port]\books\[id]`

- создание книги:\
    `[hostname]:[port]\books\create`

- Редактирование книги:\
    `[hostname]:[port]\books\[id]\update`


## Структура данных книги:

```js
{
  id: "string",
  title: "string",
  description: "string",
  authors: "string",
  favorite: "boolean",
  fileCover: "string",
}
```

## Установка
- `npm install`
- `npm run start` - запуск приложения стандартный порт - `3000`
- `npm run dev` - запуск приложения с помощью `nodemon`, стандартный порт - `3000`

## By Docker
`docker run --name lib  -v $pwd/:/app -it -p 80:3000 -w /app node:20.10-alpine npm run start`


## Ссылка посмотреть
http://lib.klazar.ru/