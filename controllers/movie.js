const Movie = require('../models/movie');
const slugify = require('slugify');
const multer = require("multer")



const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './../client/public/uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({ storage: storage });


exports.list = (req, res) => {
    Movie.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Movies  not found'
            });
        }
        res.json(data);
    });
}

exports.popular = (req, res) => {
    Movie.find({})
    .sort({imdbRating: -1})
    .limit(6)
    .exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Movies  not found'
            });
        }
        res.json(data);
    });
}
exports.latest = (req, res) => {
    Movie.find({})
    .sort({releaseDate: -1})
    .limit(6)
    .exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: 'Movies  not found'
            });
        }
        res.json(data);
    });
}


exports.langMovie = async (req, res) => {
    let movieLang = req.params.movieLang;
   
    try {
        const moviesL = await Movie.find({ movieLang });
        console.log("Hello")
        res.status(200).json(moviesL);
    } catch (error) {
        res.status(500).json(error)
    }
}



exports.catMovie = async (req, res) => {
    let movieCat = req.params.movieCat;

    try {
        const movies = await Movie.find({ movieCat })
        .sort({imdbRating: -1})

        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json(error)
    }
}


exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Movie.findOne({ slug }).exec((err, movie) => {
        if (err) {
            return res.status(400).json({
                error: 'Single Movie Not found'
            });
        }
        res.json(movie);
    });
}



// exports.fileUpload = (req, res) => {
//     if (req.files === null) {
//         res.status(400).json({
//             error: "Image Upload Failed with status 400"
//         });
//     }
//     var file = req.files.file;
//     var filename = file.name;

//     file.mv(`${__dirname}/../../client/src/images/${filename}`).then(function (err) {
//         if (err) {
//             res.json({
//                 error: "Error on Uploading File"
//             })
//         } else {
//             res.json({
//                 message: "File Uploaded Successfully"
//             })
//         }
//     })
// }

// exports.readImage = (req, res) => {

// }