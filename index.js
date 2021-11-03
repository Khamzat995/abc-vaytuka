const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const cors = require("cors");

const PORT = process.env.PORT || 3050;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://khamzat:12345@cluster0.aa1ma.mongodb.net/CommerceShop`)
    console.log(chalk.bold.magentaBright("MongoDB подключен"));

    app.listen(PORT, () => {
      console.log(chalk.bold.magentaBright(`Сервер подключен на порте ${PORT}`)
       )
     });
  } catch (e) {
    console.log(chalk.bgRed.white(`Ошибка при подключении: ${e.toString()}`));
  }
}

start()


