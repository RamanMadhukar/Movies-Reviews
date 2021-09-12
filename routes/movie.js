const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const slugify = require('slugify');
const multer = require("multer")
const { list, read, catMovie, langMovie, popular, latest} = require('../controllers/movie')


// validators
const { runValidation } = require('../validators');
const { checkMovieValidator } = require('../validators/movie');
const { requireSignin, adminMiddleware } = require('../controllers/auth');



router.get('/movies', list);
router.get('/popular', popular);
router.get('/latest', latest);
router.get('/movie/:slug', read);
router.get('/movies/:movieCat', catMovie)
router.get('/movies/lang/:movieLang', langMovie)





const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './../client/public/uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});
router.post('/movie',  upload.single("movieImage"), (req, res) => {
    const {
        name
    } = req.body;
   
    let slug = slugify(name).toLowerCase();
    let movie = new Movie({
        name,
        directedBy:req.body.directedBy,
        writtenBy:req.body.writtenBy,
        screenplayBy:req.body.screenplayBy,
        storyBy:req.body.storyBy,
        producedBy:req.body.producedBy,
        cinematography:req.body.cinematography,
        editedBy:req.body.editedBy,
        musicBy:req.body.musicBy,
        productionCompany:req.body.productionCompany,
        distributedBy:req.body.distributedBy,
        releaseDate:req.body.releaseDate,
        runningTime:req.body.runningTime,
        country:req.body.country,
        budget:req.body.budget,
        boxOfficeCollection:req.body.boxOfficeCollection,
        imdbRating: req.body.imdbRating,
        movieCat:req.body.movieCat,
        movieLang:req.body.movieLang,
        slug,
        movieImage:req.file.originalname
        
    })
    movie.save((err, data) => {
        if (err) {
            console.log('SAVE MOVIE IN DATABASE ERROR', err);
            return res.status(400).json({
                error: 'Error saving movie descrption in database. Try again'
            });
        }
        return res.json({
            message: 'Movie Descrption created Successfully !.'
        });
    })
});



// router.patch('/movie/:id',  async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const updateMovie = await Movie.findByIdAndUpdate(_id, req.body, {
//             new: true
//         });
//         res.json(updateMovie)
//     } catch (e) {
//         res.status(404).json({
//             error: "Movie Not Updated"
//         });
//     }
// }
// );
router.put('/movie/:id', upload.single("movieImage"), (req, res) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        movie.name =  req.body.name;
        movie.directedBy = req.body.directedBy;
        movie.writtenBy = req.body.writtenBy;
        movie.screenplayBy = req.body.screenplayBy;
        movie.storyBy = req.body.storyBy;
        movie.producedBy = req.body.producedBy;
        movie.cinematography = req.body.cinematography;
        movie.editedBy = req.body.editedBy;
        movie.musicBy = req.body.musicBy;
        movie.productionCompany = req.body.productionCompany;
        movie.distributedBy = req.body.distributedBy;
        movie.releaseDate = req.body.releaseDate;
        movie.runningTime = req.body.runningTime;
        movie.country = req.body.country;
        movie.budget = req.body.budget;
        movie.boxOfficeCollection = req.body.boxOfficeCollection;
        movie.imdbRating = req.body.imdbRating;
        movie.movieCat = req.body.movieCat;
        movie.movieLang = req.body.movieLang;
        if(req.file) {
        movie.movieImage = req.file.originalname;
        }

        movie.save()
        .then(()=> res.json({
            message: "Article Updated"
        }))
        .catch((err) => res.status(400).json({
            error: "Movie Not Updated"
        }))

    })
    .catch((err) => res.status(400).json(`Error: ${err}`))
})
// router.post('/image',  fileUpload);
module.exports = router;