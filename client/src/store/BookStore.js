import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._genres = []
        this._authors = []
        this._books = []
        this._selectedGenre = {}
        this._selectedAuthor = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 4
        makeAutoObservable(this)
    }

    setGenres(genres) {
        this._genres = genres
    }

    setAuthors(authors) {
        this._authors = authors
    }

    setBooks(books) {
        this._books = books
    }

    setSelectedGenre(genre) {
        this._selectedGenre = genre
    }

    setSelectedAuthor(author) {
        this._selectedAuthor = author
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get genres() {
        return this._genres
    }

    get authors() {
        return this._authors
    }

    get books() {
        return this._books
    }

    get selectedGenre() {
        this.setPage(1)
        return this._selectedGenre
    }

    get selectedAuthor() {
        this.setPage(1)
        return this._selectedAuthor
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}