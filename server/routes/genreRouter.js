const Router = require('express')
const genreController = require('../controllers/genreController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const router = new Router()

router.post('/', checkRoleMiddleware('ADMIN'), genreController.create)
router.get('/', genreController.getAll)

module.exports = router