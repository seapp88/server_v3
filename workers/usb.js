const drivelist = require('drivelist');

setInterval(async () => {
    const drives = await drivelist.list();
    let res = drives.filter(x => x.busType === 'USB' && x.mountpoints[0] && x.mountpoints[0].path);
    process.send(res);
}, 5000);
