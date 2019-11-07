const cp = require('child_process');
const wifi = cp.fork(`${__dirname}/wifi.js`);
const usb = cp.fork(`${__dirname}/usb.js`);

wifi.on('message', (data) => {
    if(data.method === 'scan') {
        delete data.method;
        wifiStore = data;
        io.to('spa').emit('setting:wifi:scan', data);
        // console.log(data)
    }
    if(data.method === 'disconnected') {
        io.to('spa').emit('setting:wifi:disconnected');
    }
    if(data.method === 'disconnected') {
        io.to('spa').emit('setting:wifi:connected');
    }
    if(data.method === 'ifaces'){
        networkStore.ethernet.ip = data.data.ethernet.ip;
        networkStore.wifi.ip = data.data.wifi.ip;
        io.to('spa').emit('info:networking', networkStore);
    }
    if(data.method === 'error1') {
        console.log(data)
    }
    if(data.method === 'error2') {
        console.log(data)
    }
});

usb.on('message', (list) => {
    usbStore = list;
    io.to('spa').emit('setting:drive:list', list);
})

ee.on('setting:wifi:disconnect', () => {
    wifi.send({method: 'disconnect', data: null});
})
ee.on('setting:wifi:connect', (data) => {
    wifi.send({method: 'connect', data});
})
// n.send({ hello: 'world' });
