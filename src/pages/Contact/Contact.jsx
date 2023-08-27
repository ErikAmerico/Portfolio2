

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (!name.trim()) {
            errors.name = 'Name is required';
        }

        if (!email.trim()) {
            errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address format';
        }

        if (!message.trim()) {
            errors.message = 'Message is required';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
        } else {
            console.log('Form submitted');
        }
    };

    const validateEmail = (e) => {
            if (!e.target.value.trim()) {
                setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required',
            }));
        } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
                setValidationErrors((prevErrors) => ({
                    ...prevErrors,
                    email: 'Invalid email address format',
             }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: null,
            }));
        }
    };

    const validateName = (e) => {
        if (!e.target.value.trim()) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                name: 'Name is required',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                name: null,
            }));
        }
    };

    const validateMessage = (e) => {
        if (!e.target.value.trim()) {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                message: 'Message is required',
            }));
        } else {
            setValidationErrors((prevErrors) => ({
                ...prevErrors,
                message: null,
            }));
        }
    };



    return (
        <section>
            <h1>Contact Me</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                        validateName(e)
                    }}
                    onBlur= {validateName}
                    isInvalid={validationErrors.name}
                    isValid={name && !validationErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                    {validationErrors.name}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        validateEmail(e)
                    }}
                    onBlur= {validateEmail}
                    isInvalid={validationErrors.email}
                    isValid={email && !validationErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {validationErrors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Message:</Form.Label>
                <Form.Control
                    as='textarea'
                    name='message'
                    rows='5'
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                        validateMessage(e)
                    }}
                    onBlur= {validateMessage}
                    isInvalid={validationErrors.message}
                    isValid={message && !validationErrors.message}
                />
                <Form.Control.Feedback type="invalid">
                    {validationErrors.message}
                </Form.Control.Feedback>
            </Form.Group>


                <Button type="submit">Submit</Button>
            </Form>
        </section>
    );
}
