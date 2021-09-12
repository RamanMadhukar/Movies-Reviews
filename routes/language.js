const express = require('express');
const router = express.Router();
const { create, list, read, remove } = require('../controllers/language');

// validators
const { runValidation } = require('../validators');
const { CreateLanguageValidator } = require('../validators/language');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.post('/language', CreateLanguageValidator, runValidation, requireSignin, adminMiddleware, create);
router.get('/languages', list);
router.get('/language/:slug', read);
router.delete('/language/:slug', requireSignin, adminMiddleware, remove);

module.exports = router;