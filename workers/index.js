const cp = require('child_process');
const wifi = cp.fork(`${__dirname}/wifi.js`);

wifi.on('message', (data) => {
    if(data.method === 'scan') {
        delete data.method;
        wifiStore = data;
        io.to('spa').emit('setting:wifi:scan', data);
        console.log(data)
    }
    if(data.method === 'disconnected') {
        io.to('spa').emit('setting:wifi:disconnected');
    }
    if(data.method === 'disconnected') {
        io.to('spa').emit('setting:wifi:connected');
    }
    console.log(data)
});

ee.on('setting:wifi:disconnect', () => {
    wifi.send({method: 'disconnect', data: null});
})
ee.on('setting:wifi:connect', (data) => {
    wifi.send({method: 'connect', data});
})
// n.send({ hello: 'world' });
