const { check } = require('express-validator');

exports.checkMovieValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),

        check('directedBy')
        .not()
        .isEmpty()
        .withMessage('directedBy is required'),

        check('writtenBy')
        .not()
        .isEmpty()
        .withMessage('writtenBy is required'),

        check('screenplayBy')
        .not()
        .isEmpty()
        .withMessage('screenplayBy is required'),

        check('storyBy')
        .not()
        .isEmpty()
        .withMessage('storyBy is required'),

        check('producedBy')
        .not()
        .isEmpty()
        .withMessage('producedBy is required'),

        check('cinematography')
        .not()
        .isEmpty()
        .withMessage('cinematography is required'),

        check('editedBy')
        .not()
        .isEmpty()
        .withMessage('editedBy is required'),

        check('musicBy')
        .not()
        .isEmpty()
        .withMessage('musicBy is required'),

        check('productionCompany')
        .not()
        .isEmpty()
        .withMessage('productionCompany is required'),

        check('distributedBy')
        .not()
        .isEmpty()
        .withMessage('distributedBy is required'),

        check('releaseDate')
        .not()
        .isEmpty()
        .withMessage('releaseDate is required'),

        check('runningTime')
        .not()
        .isEmpty()
        .withMessage('runningTime is required'),

        check('country')
        .not()
        .isEmpty()
        .withMessage('country is required'),

        check('budget')
        .not()
        .isEmpty()
        .withMessage('budget is required'),

        check('boxOfficeCollection')
        .not()
        .isEmpty()
        .withMessage('boxOfficeCollection is required')
];