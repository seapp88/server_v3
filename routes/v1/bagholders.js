const express = require('express');
const router = express.Router();
const shortid = require('shortid');

router.get('/', (req, res) => {
    let result = store.bagholders.map(i => {
        return {
            ...i, modules: store.modules.filter(x => x.bagholdrer_id === i.id)
        }
    });

    res.status(200).json(result)
});

router.get('/online', (req, res) => {
    res.status(200).json([...bagholders_online])
});

router.post('/', (req, res) => {
    let result = {
        id: req.body.id,
        name: req.body.name,
    };
    store.bagholders.push(result);

    let modules = [];
    for(let i = 1; i <= 12; i++){
        modules.push({
            id: shortid.generate(),
            index: i,
            name: 'Ячейка ' + i,
            bagholdrer_id: req.body.id
        });
    }
    store.modules.push(...modules);
    ee.emit('bagholders:update');
    res.status(200).json(result)
});

router.post('/:id', (req, res) => {
    let index = store.bagholders.findIndex(x => x.id === req.params.id);

    if(index >= 0 && req.body.name){
        store.bagholders[index].name = req.body.name;
        ee.emit('bagholders:update');
        res.status(200).json(store.bagholders[index])
    }else{
        res.status(500).json('Ошибка!')
    }

});

router.delete('/:id', (req, res) => {
    let index = store.bagholders.findIndex(x => x.id === req.params.id);
    store.bagholders.splice(index, 1);
    store.modules = store.modules.filter(x => x.bagholdrer_id !== req.params.id);
    ee.emit('bagholders:update');
    res.status(200).json('OK')
});

module.exports = router;
