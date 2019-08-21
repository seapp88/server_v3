const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const usb = require('usb');

usb.on('attach', function(device) {
    setTimeout(() => {
        SerialPort.list(function (err, ports) {
            ports.forEach(function(port) {
                if(port.serialNumber){
                    const path = port.comName;
                    const sp = new SerialPort(path, { baudRate: 115200 });

                    const parser = new Readline();
                    sp.pipe(parser);
                    sp.write("setNetSettings('ComponentTeam', '27122712', '192.168.1.69')\n");
                    console.log(555)
                }
            });
        });
    }, 1000)
});