import React from 'react';
import {Button, Form} from "react-bootstrap";

function ReviewForm({handleSubmit,revText,labelText,defaultValue}) {
    return (
        <Form>
            <Form.Group className={'mb-3'} controlId={'exampleForm.ControlTextareal'}>
                <Form.Label></Form.Label>
                <Form.Control ref={revText} as={'textarea'} defaultValue={defaultValue} rows = {3}></Form.Control>
            </Form.Group>
            <Button variant={'outline-info'} onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}

export default ReviewForm;