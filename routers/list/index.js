const router = require('express')();
const controller = require('./controller');

router.get('/', controller.list);

module.exports = router;
