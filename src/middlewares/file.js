const multer = require("multer");
const { UPLOAD_FOLDER } = require("../config");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `./${UPLOAD_FOLDER}`);
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}${file.originalname.match(/\..+$/gi)}`);
  },
});
const upload = multer({ storage });

module.exports = upload;
