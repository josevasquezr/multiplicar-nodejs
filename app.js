const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(nombreArchivo => {
            console.log(`El archivo ${colors.green(nombreArchivo)} ha sido creado`);
        }, err => {
            console.log(err);
        });
        break;

    default:
        console.log('Comando no existe, consulte \'node app --help\'');
        break;
}