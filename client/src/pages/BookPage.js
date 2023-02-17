import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useLocation, useParams} from "react-router-dom";
import {fetchBook} from "../http/bookAPI";

const BookPage = () => {
    const [book, setBook] = useState({})
    const {id} = useParams()
    const location = useLocation()
    useEffect(() => {
        fetchBook(id).then(data => setBook(data))
    }, [id])

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image src={process.env.REACT_APP_API_URL + book.img} width={300} />
                </Col>
                <Col md={6}>
                    <h1>{book.name}</h1>
                    <div className="text-black-50 fst-italic fs-5">{location.state.author.fullName}</div>
                    <div className="d-flex flex-column mt-4">
                        <h3>Описание</h3>
                        <div>{book.description}</div>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <h3>Дополнительная информация</h3>
                        <div><span className="text-black-50 fw-bold">Бренд:</span> {book.publisher}</div>
                        <div><span className="text-black-50 fw-bold">Год выпуска:</span> {book.publishYear}</div>
                        <div><span className="text-black-50 fw-bold">Кол-во памяти:</span> {book.language}</div>
                        <div><span className="text-black-50 fw-bold">Диагональ экрана:</span> {book.pages}</div>
                    </div>
                </Col>
                <Col md={2}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        border="light"
                    >
                        <h3>{book.price} руб.</h3>
                        <Button variant={"outline-success"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BookPage;