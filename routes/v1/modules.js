const express = require('express');
const router = express.Router();

router.post('/:id', (req, res) => {
    let index = store.modules.findIndex(i => i.id === req.params.id);

    if(index >= 0){
        store.modules[index].name = req.body.name;
        ee.emit('bagholders:update');
        res.status(200).json("OK")
    }else {
        res.status(500).json("Ячейки несуществует!")
    }

});

module.exports = router;
