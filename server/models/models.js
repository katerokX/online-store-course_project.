const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: 'USER'}
}, {timestamps: false})

// const Basket = sequelize.define('basket', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
// }, {timestamps: false})
//
// const BasketBook = sequelize.define('basket_book', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
// }, {timestamps: false})

const Book = sequelize.define('book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    publisher: {type: DataTypes.STRING, allowNull: false},
    publishYear: {type: DataTypes.INTEGER, allowNull: false},
    language: {type: DataTypes.STRING, allowNull: false},
    pages: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.FLOAT, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullName: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})

// User.hasOne(Basket)
// Basket.belongsTo(User)
//
// Basket.hasMany(BasketBook)
// BasketBook.belongsTo(Basket)
//
// Book.hasOne(BasketBook)
// BasketBook.belongsTo(Book)

Author.hasMany(Book)
Book.belongsTo(Author)

Genre.hasMany(Book)
Book.belongsTo(Genre)

module.exports = {
    User,
    //Basket,
    //BasketBook,
    Book,
    Author,
    Genre,
}


