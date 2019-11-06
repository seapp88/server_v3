const wifi = require("node-wifi");
wifi.init({
    iface: 'wlp2s0'
});

let scan = () => {
    wifi.scan((err, networks) => {
        if (err) {
            console.log(err);
            process.send({ method: 'error1', err});
            scan();
        } else {
            wifi.getCurrentConnections((err, currentConnections) => {
                if (err) {
                    console.log(err);
                    process.send({ method: 'error2', err});
                    scan();
                }else{
                    let list = networks;
                    if(currentConnections[0]){
                        console.log(currentConnections[0]);
                        list = networks.filter(x => x.ssid !== currentConnections[0].ssid)
                    }
                    process.send({ method: 'scan', list: list.reverse(), current: currentConnections[0] ? currentConnections[0] : null });
                    setTimeout(() => {
                        scan();
                    }, 10000)
                }
            });

        }
    });
}

scan();

let os = require('os');

setInterval(() => {
    let ifaces = os.networkInterfaces();

    let res = {
        ethernet: {
            ip: '',
            mac: ''
        },
        wifi: {
            ip: '',
            mac: ''
        }
    };

    if(ifaces['enp0s25']){
        let item = ifaces['enp0s25'].filter(x => x.family === 'IPv4')[0];
        if(item){
            res.ethernet.ip = item.address;
            res.ethernet.mac = item.mac;
        }
    }

    if(ifaces['wlp2s0']){
        let item = ifaces['wlp2s0'].filter(x => x.family === 'IPv4')[0];
        if(item){
            res.wifi.ip = item.address;
            res.wifi.mac = item.mac;
        }
    }

    process.send({ method: 'ifaces', data: res});
}, 10000);





process.on('message', (m) => {
    if(m.method === 'disconnect'){
        wifi.disconnect(function(err) {
            if (err) {
                console.log(err);
            }
            wifi.getCurrentConnections((err, currentConnections) => {
                if (err) {
                    console.log(err);
                }else{
                    if(currentConnections[0]){
                        wifi.deleteConnection({ssid: currentConnections[0].ssid}, function(err) {
                            if (err) {
                                console.log(err);
                            }
                            process.send({ method: 'disconnected'});
                        });
                    }else{
                        process.send({ method: 'disconnected'});
                    }
                }
            });
        });

    }

    if(m.method === 'connect'){
        console.log('WIFI Connect')
        wifi.connect({ ssid: m.data.ssid, password: m.data.password }, (err) => {
            if (err) {
                console.log(err);
            }
            process.send({ method: 'connected'});
        });
    }
});
//
// process.send({ foo: 'bar', baz: NaN });
