const router = require("express").Router();

router.get('/',(req, res)=>{

})

GET	/api/books	Получить все книги	Получаем массив всех книг
GET	/api/books/:id	Получить книгу по ID	Получаем объект книги, если запись не найдена, вернём Code: 404
POST	/api/books	Создать книгу	Создаём книгу и возвращаем её же вместе с присвоенным ID
PUT	/api/books/:id	Редактировать книгу по ID	Редактируем объект книги, если запись не найдена, вернём Code: 404
DELETE	/api/books/:id	Удалить книгу по ID	Удаляем книгу и возвращаем ответ: 'ok'


module.exports.booksApiRouters = router;
