# my-library-api API CRUD

Api для работы с сущностью «книга».

Для работы с MongoDB используется пакет Mongoose.

Подключение к локальной базе данных происходит через docker для чего есть файл docker-compose.yml.

Для загрузки файла книги пакет [multer](https://www.npmjs.com/package/multer).

В `dev` режиме устанавливается зависимость [nodemon](https://www.npmjs.com/package/nodemon).

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
}
```

## Методы

|  Метод   |            URL            |            Действие            |                                       Комментарий                                       |
| :------: | :-----------------------: | :----------------------------: | :-------------------------------------------------------------------------------------: |
|  `POST`  |     `/api/user/login`     |    авторизация пользователя    | метод всегда возвращает Code: 201 и статичный объект: `{ id: 1, mail: "test@mail.ru" }` |
|  `GET`   |       `/api/books`        |       получить все книги       |                                получаем массив всех книг                                |
|  `GET`   | `/api/books/:id/download` |    скачать файл книги по ID    |                 получаем файл, если запись не найдена, вернём Code: 404                 |
|  `GET`   |     `/api/books/:id`      |      получить книгу по ID      |             получаем объект книги, если запись не найдена, вернём Code: 404             |
|  `POST`  |       `/api/books`        | создать книгу и загрузить файл |                создаём книгу и возвращаем её же вместе с присвоенным ID                 |
|  `PUT`   |     `/api/books/:id`      |   редактировать книгу по ID    |           редактируем объект книги, если запись не найдена, вернём Code: 404            |
| `DELETE` |     `/api/books/:id`      |      удалить книгу по ID       |                         удаляем книгу и возвращаем ответ: 'ok'                          |

## Установка
`docker compose up`
