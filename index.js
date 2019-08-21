const mosca = require('mosca');

const ascoltatore = {
    //using ascoltatore
    type: 'mongo',
    url: 'mongodb://localhost:27017/mqtt1',
    pubsubCollection: 'ascoltatori',
    mongo: {}
};

const settings = {
    port: 1883,
    backend: ascoltatore
};

const server = new mosca.Server(settings);

server.on('clientConnected', (client) => {
    console.log('client connected', client.id);
});