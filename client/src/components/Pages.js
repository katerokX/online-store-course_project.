import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {book} = useContext(Context)
    const pageCount = Math.ceil(book.totalCount / book.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    
    return (
        <Pagination>
            {pages.map(page =>
                <Pagination.Item
                    active={book.page === page}
                    key={page}
                    onClick={() => book.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;