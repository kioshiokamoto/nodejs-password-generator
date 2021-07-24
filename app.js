import program from "commander";
import chalk from "chalk";
import clipboardy from "clipboardy";
import createPassword from "./utils/createPassword.js";
import savePassword from "./utils/savePassword.js";
const log = console.log;
program.version("1.0.0").description("A password generator");

program
  .option("-l, --length <number>", "tamaño de contraseña", "10")
  .option("-s, --save", "Exportar contraseña en un archivo de texto")
  .option("-nn, --no-numbers", "Remover numeros de contraseña")
  .option("-ns, --no-symbols", "Remover simbolos de contraseña")
  .parse();

const { length, numbers, save, symbols } = program.opts();

//Constreña generada
const generatedPassword = createPassword(length, numbers, symbols);

//Guardar contraseña
if (save) {
  savePassword(generatedPassword);
}

//Copiar
clipboardy.writeSync(generatedPassword);

// Contraseña generada
log(chalk.blue("Contraseña: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Contraseña copiada"));
