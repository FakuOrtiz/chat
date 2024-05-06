import express from "express";
import logger from "morgan";
import { Server as SocketServer } from "socket.io";
import { createServer } from "node:http";

const port = process.env.PORT ?? 4000;

const app = express();
const server = createServer(app);
const io = new SocketServer(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });
});

app.use(logger("dev"));

server.listen(port, () => console.log(`Listening on port ${port}`));
