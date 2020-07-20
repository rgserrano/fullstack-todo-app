const bcrypt = require("bcrypt");

bcrypt.hash("secret", 10, (_, hash) => console.log(hash));