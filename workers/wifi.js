const wifi = require("node-wifi");
wifi.init({
    iface: null
});

let scan = () => {
    wifi.scan((err, networks) => {
        if (err) {
            console.log(err);
            scan();
        } else {
            wifi.getCurrentConnections((err, currentConnections) => {
                if (err) {
                    console.log(err);
                    scan();
                }else{
                    let list = networks;
                    if(currentConnections[0]){
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
let ifaces = os.networkInterfaces();

console.log(ifaces)

process.on('message', (m) => {
    if(m.method === 'disconnect'){
        wifi.disconnect(function(err) {
            if (err) {
                console.log(err);
            }
            process.send({ method: 'disconnected'});
        });
    }

    if(m.method === 'connect'){
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
