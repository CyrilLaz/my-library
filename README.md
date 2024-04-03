# my-library

Многостраничный интерфейс для работы с сущностью «книга» с использованием шаблонизатора [ejs](https://www.npmjs.com/package/ejs).

В `dev` режиме устанавливается зависимость [nodemon](https://www.npmjs.com/package/nodemon).

Для загрузки файла книги используется пакет [multer](https://www.npmjs.com/package/multer).


## Возможности

При создании новой книги необходимо загрузить файл. После чего этот файл можно скачать со страницы книги.


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
  fileName: "string",
  fileBook: "string"
}
```

## Установка

- `npm install`
- `npm run start` - запуск приложения стандартный порт - `3000`
- `npm run dev` - запуск приложения с помощью `nodemon`, стандартный порт - `3000`

## By Docker
`docker run --name lib  -v $pwd/:/app -it -p 80:3000 -w /app node:20.10-alpine npm run dev`