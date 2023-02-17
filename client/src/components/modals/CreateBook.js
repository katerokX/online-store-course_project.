import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createBook, fetchAuthors, fetchGenres} from "../../http/bookAPI";
import {observer} from "mobx-react-lite";

const CreateBook = observer(({show, onHide}) => {
    const {book} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [publisher, setPublisher] = useState('')
    const [publishYear, setPublishYear] = useState(0)
    const [language, setLanguage] = useState('')
    const [pages, setPages] = useState(0)
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchGenres().then(data => book.setGenres(data))
        fetchAuthors().then(data => book.setAuthors(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addBook = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('publisher', publisher)
        formData.append('publishYear', `${publishYear}`)
        formData.append('language', language)
        formData.append('pages', `${pages}`)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('authorId', book.selectedAuthor.id)
        formData.append('genreId', book.selectedGenre.id)
        createBook(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавление нового устройства
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label htmlFor="nameInput">Название:</Form.Label>
                    <Form.Control
                        id="nameInput"
                        placeholder="Введите название устройсва..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Label htmlFor="authorSelect" className="mt-2">Бренд:</Form.Label>
                    <Dropdown id="authorSelect">
                        <Dropdown.Toggle variant="light">
                            {book.selectedAuthor.fullName || "Выберите бренд..."}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {book.authors.map(author =>
                                <Dropdown.Item
                                    onClick={() => book.setSelectedAuthor(author)}
                                    key={author.id}
                                >
                                    {author.fullName}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Label htmlFor="genreSelect" className="mt-2">Тип:</Form.Label>
                    <Dropdown id="genreSelect">
                        <Dropdown.Toggle variant="light">
                            {book.selectedGenre.name || "Выберите тип устройства..."}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {book.genres.map(genre =>
                                <Dropdown.Item
                                    onClick={() => book.setSelectedGenre(genre)}
                                    key={genre.id}
                                >
                                    {genre.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Label htmlFor="descriptionInput" className="mt-2">Описание товара:</Form.Label>
                    <Form.Control
                        as="textarea"
                        id="descriptionInput"
                        placeholder="Введите цвет устройства..."
                        style={{ height: '100px' }}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Form.Label htmlFor="publisherInput" className="mt-2">Цвет:</Form.Label>
                    <Form.Control
                        id="publisherInput"
                        placeholder="Введите цвет устройства..."
                        value={publisher}
                        onChange={e => setPublisher(e.target.value)}
                    />
                    <Form.Label htmlFor="publishYearInput" className="mt-2">Год выпуска:</Form.Label>
                    <Form.Control
                        id="publishYearInput"
                        placeholder="Введите год выпуска устройства..."
                        type="number"
                        value={publishYear}
                        onChange={e => setPublishYear(Number(e.target.value))}
                    />
                    <Form.Label htmlFor="languageInput" className="mt-2">Гарантийный строк:</Form.Label>
                    <Form.Control
                        id="languageInput"
                        placeholder="Введите гарантийный строк товара..."
                        value={language}
                        onChange={e => setLanguage(e.target.value)}
                    />
                    <Form.Label htmlFor="pagesInput" className="mt-2">Количество памяти:</Form.Label>
                    <Form.Control
                        id="pagesInput"
                        placeholder="Введите количество памяти..."
                        type="number"
                        value={pages}
                        onChange={e => setPages(Number(e.target.value))}
                    />
                    <Form.Label htmlFor="priceInput" className="mt-2">Стоимость:</Form.Label>
                    <Form.Control
                        id="priceInput"
                        placeholder="Введите стоимость книги..."
                        type="number"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Label htmlFor="imageInput" className="mt-2">Изображение:</Form.Label>
                    <Form.Control
                        id="imageInput"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addBook}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBook;