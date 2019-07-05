const path = require('path');

const multer = require('multer');

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: function(req, file, cb) {
      const fileName = Math.random()
        .toString(36)
        .substring(2, 15)
        .concat(file.originalname);
      cb(null, fileName);
    }
  })
};
