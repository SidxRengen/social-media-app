const mongoose = require('mongoose');
const mongouri="mongodb://127.0.0.1:27017/user"
async function main() {
  await mongoose.connect(mongouri);
}
module.exports = main