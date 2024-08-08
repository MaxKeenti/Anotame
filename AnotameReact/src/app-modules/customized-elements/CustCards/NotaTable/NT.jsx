import React from 'react';
import Table from 'react-bootstrap/Table';
import { useFormContext } from '../../../contexts/FormContext';

function NotaTable({ children }) {
    const { state } = useFormContext();

    return (
        <>
            {children}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Teléfono</th>
                        <th>Folio</th>
                        <th>Fecha de Recepción</th>
                        <th>Fecha de Entrega</th>
                        <th>Prenda</th>
                        <th>Descripción</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Importe</th>
                        <th>Método de Pago</th>
                        <th>Monto Dejado</th>
                        <th>Pagado en Totalidad</th>
                    </tr>
                </thead>
                <tbody>
                    {state.submittedData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.clientName}</td>
                            <td>{data.clientFirstLastName}</td>
                            <td>{data.clientSecondLastName}</td>
                            <td>{data.telefonNumber}</td>
                            <td>{data.folio}</td>
                            <td>{data.receivedDate}</td>
                            <td>{data.deliveryDate}</td>
                            <td>{data.garmentType}</td>
                            <td>{data.garmentDescription}</td>
                            <td>{data.garmentQuantity}</td>
                            <td>{data.garmentRepairCost}</td>
                            <td>{data.garmentRepairAmount}</td>
                            <td>{data.paymentMethod}</td>
                            <td>{data.amountLeft}</td>
                            <td>{data.paidInFull ? 'Sí' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default NotaTable;