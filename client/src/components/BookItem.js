import React, {useEffect, useState} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import {BOOK_ROUTE} from "../utils/consts";
import {fetchAuthor} from "../http/bookAPI";

const BookItem = ({book}) => {
    const navigate = useNavigate()
    const [author, setAuthor] = useState({})
    useEffect(() => {
        fetchAuthor(book.authorId).then(data => setAuthor(data))
    }, [book.authorId])

    return (
        <Col md={3} onClick={() => navigate(BOOK_ROUTE + "/" + book.id, {state: {author}})}>
            <Card style={{width: 200, height: 350, cursor: "pointer"}} className="mb-2 border-0">
                <Image src={process.env.REACT_APP_API_URL + book.img} width={150} height={230}/>
                <div>{book.name}</div>
                <div className="text-black-50 fst-italic">
                    {author.fullName}, {book.publishYear}
                </div>
                <div>{book.price} руб.</div>
            </Card>
        </Col>
    );
};

export default BookItem;