import Table from 'react-bootstrap/Table';
import { Card } from 'react-bootstrap';
import { useFormContext } from '../../../contexts/FormContext';

function NotaTable({ children }) {
    const { state } = useFormContext();

    return (
        <Card>
            <Card.Body>
                {children}
                {state.submittedData.clientData && (
                    <Table responsive striped bordered hover className="mb-4">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{state.submittedData.clientData.clientName}</td>
                                <td>{state.submittedData.clientData.clientFirstLastName}</td>
                                <td>{state.submittedData.clientData.clientSecondLastName}</td>
                            </tr>
                        </tbody>
                    </Table>
                )}

                {state.submittedData.clientData && (
                    <Table responsive striped bordered hover className="mb-4">
                        <thead>
                            <tr>
                                <th>Número de teléfono</th>
                                <th>Folio</th>
                                <th>Fecha de Recepción</th>
                                <th>Fecha y Hora de Entrega</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{state.submittedData.clientData.telefonNumber}</td>
                                <td>{state.submittedData.clientData.folio}</td>
                                <td>{state.submittedData.clientData.receivedDate}</td>
                                <td>{state.submittedData.clientData.deliveryDate}</td>
                            </tr>
                        </tbody>
                    </Table>
                )}

                {state.submittedData.garmentData && (
                    <Table responsive striped bordered hover className="mb-4">
                        <thead>
                            <tr>
                                <th>Cantidad</th>
                                <th>Prenda</th>
                                <th>Arreglos</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Importe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.submittedData.garmentData.garments.map((garment, garmentIndex) => (
                                <tr key={garmentIndex}>
                                    <td>{garment.garmentQuantity}</td>
                                    <td>{garment.garmentType}</td>
                                    <td>{garment.garmentRepair.join(', ')}</td>
                                    <td>{garment.garmentDescription}</td>
                                    <td>{garment.garmentRepairCost}</td>
                                    <td>{garment.garmentRepairAmount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}

                {state.submittedData.paymentData && (
                    <Table responsive striped bordered hover className="mb-4">
                        <thead>
                            <tr>
                                <th>¿Saldado?</th>
                                <th>¿A cuenta?</th>
                                <th>Método de Pago</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{state.submittedData.paymentData.paidInFull ? 'Sí' : 'No'}</td>
                                <td>{state.submittedData.paymentData.amountLeft}</td>
                                <td>{state.submittedData.paymentData.paymentMethod}</td>
                            </tr>
                        </tbody>
                    </Table>
                )}
            </Card.Body>
        </Card>
    );
}

export default NotaTable;
