const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(wifiStore)
});

router.post('/', (req, res) => {
    let module = store.modules.find(i => i.name === req.body.alias);
    console.log(module, req.body.alias);
    io.to(module.bagholdrer_id).emit('turn', module.index);
    res.status(200).json('OK')
});

module.exports = router;
