import { useQuery } from '@apollo/client';
import { Button, Modal, Table, Title } from '@mantine/core';
import React, { useState } from 'react'
import { GET_ALL_SALES } from '../queries';

const Invoice = ({ setSale, setOpenInvoice, sale }) => {
    return (
        <Button
            onClick={() => {
                setOpenInvoice(true);
                setSale(sale);
            }}
        >
            Invoice
        </Button>
    );
}

export const Sales = () => {
    const [openInvoice, setOpenInvoice] = useState(false);
    const [sale, setSale] = useState();
    const { data: sales } = useQuery(GET_ALL_SALES);

    const salesRows = sales?.sales.map((sale) => (
        <tr key={sale.id} className="odd:bg-gray-900">
            <td>{sale.number}</td>
            <td>{sale.customer.fullName}</td>
            <td>
                <Invoice
                    setSale={setSale}
                    sale={sale} />
                    setOpenInvoice={setOpenInvoice}
            </td>
        </tr>
    ));

    return (
        <div>
            <Title order={1}>Sales</Title>
            <Table>
                <thead>
                    <tr>
                        <th>Sale number</th>
                        <th>Customer</th>
                        <th>Invoice</th>
                    </tr>
                </thead>
                <tbody>{salesRows}</tbody>
            </Table>
            <Modal
                size="md"
                opened={openInvoice}
                onClose={() => setOpenInvoice(false)}
                title="Invoice"
            >
                {/* Invoice pre Sale */}
                {/* <Invoice setOpened={setOpenInvoice} sale={sale} /> */}
            </Modal>
        </div>
    );
};