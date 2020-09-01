const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor de base introducido ${base} es incorrecto!`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor de limite introducido ${limite} es incorrecto!`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }
        });
    });
};

let listarTabla = (base, limite = 10) => {
    console.log('======================'.green);
    console.log(`Tabla del ${base} al ${limite}`.green);
    console.log('======================'.green);
    console.log('');

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

    console.log('\n----- Fin de la tabla -----'.blue);
};

module.exports = {
    crearArchivo,
    listarTabla
};