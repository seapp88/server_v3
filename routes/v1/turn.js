const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    let module = store.modules.find(i => i.id === req.params.id);
    console.log(module, req.params.id);
    io.to(module.bagholdrer_id).emit('turn', module.index);
    res.status(200).json('OK')
});

router.post('/alias', (req, res) => {
    let module = store.modules.find(i => i.name === req.body.alias);
    io.to(module.bagholdrer_id).emit('turn', module.index);
    res.status(200).json('OK')
});

module.exports = router;
