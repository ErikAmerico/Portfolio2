
import './Contact.css';
import { useState } from 'react';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

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
            errors.email = 'Email Address is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid Email Address format';
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
                    email: 'Invalid Email Address format',
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
        <>
        <div className='container'>
        <div className='row'>
        <img src='/src/images/letMeKnow.png' alt="Avatar Calling" className='col-12 col-md-6 content' id='letMeKnow' />
        <section id='contactSection' className='col-12 col-md-6 content'>
            <h1 id='contactMeTitle'>Contact Me</h1>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <OverlayTrigger
                    placement='top'
                    show={!!validationErrors.name}
                    overlay={<Tooltip className='tooltipContent'>{validationErrors.name}</Tooltip>}
                > 
                <Form.Control
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                        validateName(e)
                    }}
                    onBlur= {validateName}
                />
                </OverlayTrigger>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email Address:</Form.Label>
                <OverlayTrigger
                    placement='top'
                    show={!!validationErrors.email}
                    overlay={<Tooltip className='tooltipContent'>{validationErrors.email}</Tooltip>}
                >
                <Form.Control
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        validateEmail(e)
                    }}
                    onBlur= {validateEmail}
                />
                </OverlayTrigger>
            </Form.Group>

            <Form.Group>
                <Form.Label>Message:</Form.Label>
                <OverlayTrigger
                    placement='top'
                    show={!!validationErrors.message}
                    overlay={<Tooltip className='tooltipContent'>{validationErrors.message}</Tooltip>}
                >
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
                />
                </OverlayTrigger>
            </Form.Group>


                <Button type="submit">Submit</Button>
            </Form>
        </section>
        </div>
        </div>
        </>
    );
}
