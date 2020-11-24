const router = require('express')();
const list = require('./list');

router.use('/list', list);

module.exports = router;
