const Router = require('express')
const bookController = require('../controllers/bookController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const router = new Router()

router.post('/', checkRoleMiddleware('ADMIN'), bookController.create)
router.get('/', bookController.getAll)
router.get('/:id', bookController.getOne)

module.exports = router