# my-library-user-api

Интерфейс для работы с сущностью `user` с использованием шаблонизатора [ejs](https://www.npmjs.com/package/ejs).

Для сохранения данных сессии пользователя используется [express-session](https://www.npmjs.com/package/express-session), для авторизации [passport.js](https://www.npmjs.com/package/passport)

В качестве базы данных используется mongoDB, для работы с ней [mongoose](https://mongoosejs.com/).\
В `dev` режиме устанавливается зависимость [nodemon](https://www.npmjs.com/package/nodemon).

## Routers

- Cтраница с формой входа / регистрации:\
   `GET /api/user/login`

- Cтраница профиля:\
   `GET /api/user/me`

- Запрос на выход из учетной записи и хакрытие текущей сессии:\
   `GET /api/user/logout`

- Запрос на создание новой учетной записи:\
   `POST /api/user/signup`

- Запрос на вход под учетной записью:\
   `POST /api/user/login`

## Структура данных :

```js
{
  username: string;
  password: string;
}
```

## Переменные окружения:

- NODE_ENV=production
  - SESSION_SECRET=
  - MONGO_URL=mongodb://mongodb/users
  - PORT=3000

## Установка

- `npm install`
- `npm run start` - запуск приложения стандартный порт - `3000`
- `npm run dev` - запуск приложения с помощью `nodemon`, стандартный порт - `3000`

## By Docker

`docker `

## Ссылка посмотреть

http://lib.klazar.ru/
