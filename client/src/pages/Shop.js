import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenreBar from "../components/GenreBar";
import BookList from "../components/BookList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAuthors, fetchBooks, fetchGenres} from "../http/bookAPI";
import Pages from "../components/Pages";
import AuthorBar from "../components/AuthorBar";

const Shop = observer(() => {
    const {book} = useContext(Context)

    useEffect(() => {
        fetchGenres().then(data => book.setGenres(data))
        fetchAuthors().then(data => book.setAuthors(data))
        fetchBooks(book.selectedAuthor.id, book.selectedGenre.id, book.page, book.limit).then(data => {
            book.setBooks(data.rows)
            book.setTotalCount(data.count)
        })
    }, [book.selectedAuthor, book.selectedGenre, book.page])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={2}>
                    <div className="fw-bold">Типы:</div>
                    <GenreBar />
                    <div className="mt-4 fw-bold">Бренды:</div>
                    <AuthorBar />
                </Col>
                <Col md={10}>
                    <BookList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;