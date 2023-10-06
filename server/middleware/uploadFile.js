const createHttpError = require("http-errors");
const multer = require("multer");
const path = require("path");

const UPLOAD_FILE = "public/images/categories";
const MAX_FILE_SIZE = 1024 * 1024 * 2; // 2MB
const ALLOWED_FILE_TYPES = ["jpg", "jpeg", "png"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FILE);
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(
      null,
      Date.now() + "-" + file.originalname.replace(extname, "" + extname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  const extname = path.extname(file.originalname);
  if (ALLOWED_FILE_TYPES.includes(extname.substring(1))) {
    return cb(null, true);
  } else {
    const err = new Error("File Not Allowed");
    console.log(err);
    return cb(err);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter,
});
module.exports = upload;
