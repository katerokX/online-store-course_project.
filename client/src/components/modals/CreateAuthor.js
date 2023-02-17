import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createAuthor} from "../../http/bookAPI";

const CreateAuthor = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addAuthor = () => {
        createAuthor({fullName: value}).then(data => {
            setValue('')
            onHide()
        })
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
                    Добавление нового типа
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Введите тип полностью..."
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addAuthor}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAuthor;