import { Server } from "http";
import app from "./app";
import config from "./config/config";
import mongoose from "mongoose";

let server: Server;
const bootstrap = async () => {
  try {
    await mongoose.connect(config.db_url as string).then(() => {
      console.log("DB connected succesfully");
    });
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

bootstrap();
