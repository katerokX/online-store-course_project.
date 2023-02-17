import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const GenreBar = observer(() => {
    const {book} = useContext(Context)

    return (
        <ListGroup variant="flush">
            {book.genres.map(genre =>
                <ListGroup.Item
                    key={genre.id}
                    onClick={() => book.setSelectedGenre(genre)}
                    active={genre.id === book.selectedGenre.id}
                    style={{cursor: "pointer"}}
                >
                    {genre.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default GenreBar;