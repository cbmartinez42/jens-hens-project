const router = require('express').Router();

// const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const orderRoutes = require('./orderRoutes.js');
// const commentRoutes = require('./commentRoutes');

// router.use('/posts', postRoutes);
router.use('/user', userRoutes);
router.use('/login', loginRoutes);
router.use('/order', orderRoutes);
// router.use('/comment', commentRoutes);

module.exports = router;