const { check } = require('express-validator');

exports.CreateLanguageValidator = [
    check('value')
        .not()
        .isEmpty()
        .withMessage('Name is required')
];