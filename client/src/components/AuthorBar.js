import React, {useContext} from 'react';
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const AuthorBar = observer(() => {
    const {book} = useContext(Context)

    return (
        <ListGroup variant="flush">
            {book.authors.map(author =>
                <ListGroup.Item
                    key={author.id}
                    onClick={() => book.setSelectedAuthor(author)}
                    active={author.id === book.selectedAuthor.id}
                    style={{cursor: "pointer"}}
                >
                    {author.fullName}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default AuthorBar;