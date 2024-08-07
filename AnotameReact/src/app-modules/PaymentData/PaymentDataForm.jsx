import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function PaymentDataForm({ handleNextTab }) {
    const [validated, setValidated] = useState(false);
    const [isPaidInFull, setIsPaidInFull] = useState(false);
    const [leftMoney, setLeftMoney] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            handleNextTab();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="paidInFull">
                    <Form.Check
                        type="checkbox"
                        label="¿Se pagó en totalidad la cuenta?"
                        onChange={(e) => {
                            setIsPaidInFull(e.target.checked);
                            setLeftMoney(false);
                        }}
                        feedback="Debe verificar esta opción antes de continuar"
                        feedbackType="invalid"
                    />
                </Form.Group>
            </Row>
            {!isPaidInFull && (
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="leftMoney">
                        <Form.Check
                            type="checkbox"
                            label="¿Dejó a cuenta?"
                            onChange={(e) => setLeftMoney(e.target.checked)}
                            feedback="Debe verificar esta opción antes de continuar"
                            feedbackType="invalid"
                        />
                    </Form.Group>
                </Row>
            )}
            {leftMoney && (
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="amountLeft">
                        <Form.Label>¿Cuánto dinero dejó a cuenta?</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Monto"
                            required
                            feedback="Debe ingresar un monto válido"
                            feedbackType="invalid"
                        />
                        <Form.Control.Feedback>
                            ¡Aceptado correctamente!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese un monto válido.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            )}
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="paymentMethod">
                    <Form.Label>¿Cuál método de pago usó?</Form.Label>
                    <Form.Control as="select" required>
                        <option value="">Seleccione una opción</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta</option>
                        <option value="transferencia">Transferencia</option>
                    </Form.Control>
                    <Form.Control.Feedback>
                        ¡Aceptado correctamente!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Por favor, seleccione un método de pago.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Agregar a la nota</Button>
        </Form>
    );
}

export default PaymentDataForm;
