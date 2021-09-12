const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const movieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        directedBy: {
            type: String,
            trim: true,
            required: true
        },
        writtenBy: {
            type: String,
            trim: true,
            required: true
        },
        screenplayBy: {
            type: String,
            trim: true,
            required: true
        },
        storyBy: {
            type: String,
            trim: true,
            required: true
        },
        producedBy: {
            type: String,
            trim: true,
            required: true
        },
        cinematography: {
            type: String,
            trim: true,
            required: true
        },

        editedBy: {
            type: String,
            trim: true,
            required: true
        },
        musicBy: {
            type: String,
            trim: true,
            required: true
        },
        productionCompany: {
            type: String,
            trim: true,
            required: true
        },
        distributedBy: {
            type: String,
            trim: true,
            required: true
        },

        releaseDate: {
            type: Date,
            trim: true,
            required: true
        },
        runningTime: {
            type: String,
            trim: true,
            required: true
        },
        country: {
            type: String,
            trim: true,
            required: true
        },

        budget: {
            type: String,
            trim: true,
            required: true
        },

        boxOfficeCollection: {
            type: String,
            trim: true,
            required: true
        } ,
        imdbRating: {
            type: Number,
            trim: true,
            required: true
        } ,
        movieImage: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true
        },
        movieCat: { type: String, ref: 'Category', required: true },
        movieLang: { type: String, ref: 'Language', required: true }
    },

    { timestamp: true }
)

module.exports = mongoose.model('Movie', movieSchema);