const {Author} = require('../models/models')
const ApiError = require('../error/ApiError')

class AuthorController {
    async create(req, res) {
        const {fullName} = req.body
        const author = await Author.create({fullName})
        return res.json(author)
    }

    async getAll(req, res) {
        const authors = await Author.findAll()
        return res.json(authors)
    }

    async getOne(req, res) {
        const {id} = req.params
        const author = await Author.findOne({where: {id}})
        return res.json(author)
    }
}

module.exports = new AuthorController()