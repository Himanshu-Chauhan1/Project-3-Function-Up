const express = require('express');
const router = express.Router();

const booksController = require("../controllers/booksController")
const userController = require("../controllers/userController")
const {authentication,authorization} = require("../middleWare/userAuth")
const {getBooksById,updateByBookId} =require('../extra work/mz')
const {createReview, deleteBooksByIdAndReviewById} =require('../controllers/reviewController')


 // User routes
 router.post('/register', userController.createUser);
 router.post('/login', userController.loginUser);


//blog routes
router.post('/books',authentication, authorization, booksController.createBooks);
router.get('/books/:bookId', getBooksById);
router.put('/books/:bookId', updateByBookId);

// Review routes
router.post('/books/:bookId/review',createReview)
router.delete('/books/:bookId/review/:reviewId', deleteBooksByIdAndReviewById);
// router.get('/books',authController.autherAuth, booksController.listBlog);
// router.put('/blogs',authController.autherAuth, blogController.updateBlog);
//  router.delete('/blogs/:blogId', authController.autherAuth, blogController.deleteBlogByID);
//  router.delete('/blogs',authController.autherAuth, blogController.deleteBlogByParams);

module.exports =  router;

