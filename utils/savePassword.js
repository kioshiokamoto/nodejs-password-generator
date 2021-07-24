import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import os from "os";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const savePassword = (password) => {
  fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 666, (e, id) => {
    fs.write(id, password + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        console.log(
          chalk.green("Contraseña guardada en archivo passwords.txt")
        );
      });
    });
  });
};

export default savePassword;
