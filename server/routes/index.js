const Router = require('express')
const userRouter = require('./userRouter')
const bookRouter = require('./bookRouter')
const authorRouter = require('./authorRouter')
const genreRouter = require('./genreRouter')

const router = new Router()

router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/author', authorRouter)
router.use('/genre', genreRouter)

module.exports = router