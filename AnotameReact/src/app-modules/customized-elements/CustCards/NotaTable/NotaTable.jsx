import Table from 'react-bootstrap/Table';
import { Card } from 'react-bootstrap';
import { useFormContext } from '../../../contexts/FormContext';

function NotaTable({ children }) {
    const { state } = useFormContext();

    return (
        <Card>
            <Card.Body>
                {children}
                <Table responsive striped bordered hover className="mb-4">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.submittedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.clientName}</td>
                                <td>{data.clientFirstLastName}</td>
                                <td>{data.clientSecondLastName}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

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
                        {state.submittedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.telefonNumber}</td>
                                <td>{data.folio}</td>
                                <td>{data.receivedDate}</td>
                                <td>{data.deliveryDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

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
                        {state.submittedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.garmentType}</td>
                                <td>{data.garmentDescription}</td>
                                <td>{data.garmentQuantity}</td>
                                <td>{data.garmentRepairCost}</td>
                                <td>{data.garmentRepairAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Table responsive striped bordered hover className="mb-4">
                    <thead>
                        <tr>
                            <th>¿Saldado?</th>
                            <th>¿A cuenta?</th>
                            <th>Método de Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.submittedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.paymentMethod}</td>
                                <td>{data.amountLeft}</td>
                                <td>{data.paidInFull ? 'Sí' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default NotaTable;
