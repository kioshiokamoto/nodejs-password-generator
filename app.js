import program from "commander";
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

log(generatedPassword);
