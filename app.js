const Lugar =  require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias : 'd',
        dec: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
/*
Lugar.getLugarLatLng(argv.direccion).then(console.log);
*/
/*
clima.getClima(40.750000,-74.000000)
    .then(console.log)
    .catch(console.log);
*/
const getInfo = async (direccion) => {
    try {
        const coords = await Lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat,coords.lng);
        return `el clima de ${direccion} es de ${temp}`;
    } catch (error) {
        return `no se pudo determinar el clima de ${direccion}`
    }
    
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);