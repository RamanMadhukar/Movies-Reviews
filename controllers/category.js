const Category = require('../models/category');

const slugify = require('slugify');


exports.create = (req, res) =>  {
    const { name } = req.body;
    let slug = slugify(name).toLowerCase();

    let category = new Category({ name, slug });

    category.save((err, data) => {
        if (err) {
            console.log('SAVE CATEGORY IN DATABASE ERROR', err);
            return res.status(400).json({
                error: 'Error saving category in database. Try again'
            });
        }
        return res.json({
            message: 'Category created Successfully !.'
        });
    });
}

exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Category.findOne({ slug }).exec((err, category) => {
        if (err) {
            return res.status(400).json({
                error: 'Single Categoty Not found'
            });
        }
        res.json(category);
    });
} 

exports.list = (req, res) => {
    Category.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Category not found'
            });
        }
        res.json(data);
    });
}

exports.remove = (req, res) => {

    const slug = req.params.slug.toLowerCase();

    Category.findOneAndRemove({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Error not Removing Category'
            });
        }
        res.json({
            message: 'Category deleted successfully'
        });
    });

}