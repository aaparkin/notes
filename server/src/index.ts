import express from "express";
import { config } from "dotenv";
import { generalRouter } from "./modules";

config();

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/api/1", generalRouter);

const appStart = async () => {
  process.once("SIGUSR2", function () {
    process.kill(process.pid, "SIGUSR2");
  });

  app.listen(PORT || 7000, () => {
    console.log(`server started at ${PORT} port`);
  });

  process.on("SIGTERM", (error) => {
    console.log("SIGTERM", error);
    process.kill(process.pid, 'SIGTERM');
  });

  process.on("uncaughtException", (error) => {
    console.log("uncaughtException", error);
    process.kill(process.pid);
  });
};

appStart();
