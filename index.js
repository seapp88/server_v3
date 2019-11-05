const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const http_log = require('./utils/http_log');

process.title = "Light Sorting";

const EventEmitter = require('events')

global.ee = new EventEmitter();

const cleanExit = () => {
    console.log('\nServer stopped!!!');
    process.exit()
};
process.on('SIGINT', cleanExit);
process.on('SIGTERM', cleanExit);

global.io = require('socket.io')(server);
global.store = require('./store/index');
global.wifiStore = {};
global.bagholders_online = new Set();

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', http_log);

require('./utils/socket');

require('./workers/index.js');

const {bagholders, turn, wifi, settings, modules} = require('./routes/v1/index');
app.use('/api/v1/bagholders', bagholders);
app.use('/api/v1/turn', turn);
app.use('/api/v1/wifi', wifi);
app.use('/api/v1/settings', settings);
app.use('/api/v1/modules', modules);

server.listen(80, () => {
    console.log('Start server 3000 port');
});

io.use((socket, next) => {
    let token = socket.handshake.query;
    if(token.q){
        socket.mac = token.q;
    }
    return next();
});

ee.on('bagholders:update', () => {
    let result = store.bagholders.map(i => {
        return {
            ...i, modules: store.modules.filter(x => x.bagholdrer_id === i.id)
        }
    });
    io.to('spa').emit('bagholders:update', result)
})

io.on('connection', (socket) => {
    if(socket.mac){
        console.log('======NEW CONNECTION BAGHOLDER ('+ socket.mac +') ======');
        bagholders_online.add(socket.mac);
        socket.join(socket.mac);
        socket.on('disconnect', () => {
            bagholders_online.delete(socket.mac);
            io.to('spa').emit('bagholders:online', [...bagholders_online]);
        })
        io.to('spa').emit('bagholders:online', [...bagholders_online]);
    }else {
        console.log('======NEW CONNECTION SPA ======');
        socket.join('spa');
        socket.on('setting:wifi:disconnect', () => {
            ee.emit('setting:wifi:disconnect')
        });
        socket.on('setting:wifi:connect', (data) => {
            ee.emit('setting:wifi:disconnect', data)
        });
        socket.on('settings:color:base', (data) => {
            store.settings.base_color = data;
            io.sockets.emit('settings:color:set:base', data);
        });
        socket.on('settings:color:error', (data) => {
            store.settings.error_color = data;
            io.sockets.emit('settings:color:set:error', data);
        });
        socket.on('settings:mdm', (data) => {
            store.settings.mdm = data;
            console.log(data)
            io.sockets.emit('settings:mdm:set', data);
        });
    }
});
