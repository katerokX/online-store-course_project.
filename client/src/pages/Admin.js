import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateGenre from "../components/modals/CreateGenre";
import CreateAuthor from "../components/modals/CreateAuthor";
import CreateBook from "../components/modals/CreateBook";

const Admin = () => {
    const [genreVisible, setGenreVisible] = useState(false)
    const [authorVisible, setAuthorVisible] = useState(false)
    const [bookVisible, setBookVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-3 p-2"
                onClick={() => setGenreVisible(true)}
            >
                Добавить тип утройсва
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-3 p-2"
                onClick={() => setAuthorVisible(true)}
            >
                Добавить бренд устройства
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-3 p-2"
                onClick={() => setBookVisible(true)}
            >
                Добавить устройства
            </Button>
            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
            <CreateAuthor show={authorVisible} onHide={() => setAuthorVisible(false)}/>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
        </Container>
    );
};

export default Admin;