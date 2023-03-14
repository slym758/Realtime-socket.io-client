import io from "socket.io-client";

let socked;

export const init = () => {
  console.log("Suncuya bağlanılıyor");

  socked = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socked.on("connect", () => console.log("Sunucuya Bağlanıldı."));
};

export const send = (color) => {
  socked.emit("newColor", color);
};

export const subscript = (cb) => {
  socked.on("receive", (color) => {
    console.log(color);
    cb(color);
  });
};
