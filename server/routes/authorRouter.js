const Router = require('express')
const authorController = require('../controllers/authorController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const router = new Router()

router.post('/', checkRoleMiddleware('ADMIN'), authorController.create)
router.get('/', authorController.getAll)
router.get('/:id', authorController.getOne)

module.exports = router