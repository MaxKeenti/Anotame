import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import CustH1 from '../customized-elements/CustH1a/CustH1';

function NotaCreationForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <CustH1>Crear nota</CustH1>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="clientName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre"
                    />
                    <Form.Control.Feedback>
                        ¡Aceptado correctamente!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Por favor, coloca un Nombre.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="clientFirstLastName">
                    <Form.Label>Apellido Paterno</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Apellido Paterno"
                    />
                    <Form.Control.Feedback>
                        ¡Aceptado correctamente!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Por favor, coloca un Apellido Paterno.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="clientSecondLastName">
                    <Form.Label>Apellido Materno</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Apellido Materno"
                    />
                    <Form.Control.Feedback>
                        ¡Aceptado correctamente!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Por favor, coloca un Apellido Materno.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Los datos insertados son correctos"
                    feedback="Debes verificar que los datos son correctos antes de continuar"
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default NotaCreationForm;