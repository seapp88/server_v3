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

const nrf24 = require("nrf24"); // Load de module

// Init the radio
let rf24= new nrf24.nRF24(22,7);
rf24.begin();

setInterval(() => {
    let data= Buffer.from('Hello nrf'); // Create a node buffer for sending data
    rf24.useWritePipe("0x72646f4e31",true); // Select the pipe address to write with Autock
    rf24.write(data); // send the data in sync mode

    rf24.getStats();
}, 5000);

// Configure the radio
// rf24.config({
//     PALevel: nrf24.RF24_PA_LOW,
//     DataRate: nrf24.RF24_2MBPS,
// });