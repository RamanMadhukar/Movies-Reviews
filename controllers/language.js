const Language = require('../models/language');

const slugify = require('slugify');


exports.create = (req, res) =>  {
    const { value } = req.body;
    let slug = slugify(value).toLowerCase();

    let language = new Language({ value, slug });

    language.save((err, data) => {
        if (err) {
            console.log('SAVE LANGUAGE IN DATABASE ERROR', err);
            return res.status(400).json({
                error: 'Error saving language in database. Try again'
            });
        }
        return res.json({
            message: 'Language created Successfully !.'
        });
    });
}

exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Language.findOne({ slug }).exec((err, language) => {
        if (err) {
            return res.status(400).json({
                error: 'Single Language Not found'
            });
        }
        res.json(language);
    });
}

exports.list = (req, res) => {
    Language.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Language not found'
            });
        }
        res.json(data);
    });
}

exports.remove = (req, res) => {

    const slug = req.params.slug.toLowerCase();

    Language.findOneAndRemove({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Error not Removing Language'
            });
        }
        res.json({
            message: 'Language deleted successfully'
        });
    });

}