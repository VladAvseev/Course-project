const Router = require('express');
const router = new Router();
const userRouter = require('./userRoutes');
const authRouter = require('./authRoutes');
const postRouter = require('./postRoutes');

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/post', postRouter);

module.exports = router