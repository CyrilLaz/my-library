const bookId = location.pathname.split("/").pop();
// console.log(bookId);
const socket = io.connect('/',{query:`bookId=${bookId}`});
