module.exports.SocketIO = class {
  constructor(server) {
    this.io = new (require("socket.io").Server)(server);
  }

  //from-me-for-book
  //for-book-to-me
  init() {
    this.io.on("connection", (socket) => {
      const { id } = socket;
      console.log("connection ", id);
      const { bookId } = socket.handshake.query;
      // console.log("bookId ", bookId);

      socket.on("disconnect", () => {
        console.log("disconnect ", id);
      });
    });
  }
};
