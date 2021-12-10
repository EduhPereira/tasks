import { createConnection } from "typeorm";

export const connectServerBD = async () => {
  const connection = await createConnection();
  console.log(`App conectado ao BD ${connection.options.database}`);

  process.on("SIGINT", () => {
    connection.close().then(() => console.log("Conexão com o BD fechada"));
  });
};
