const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let data = {baseColor: store.settings.base_color, errorColor: store.settings.error_color, mdm: store.settings.mdm, drive: usbStore};
    res.status(200).json(data)
});

module.exports = router;
