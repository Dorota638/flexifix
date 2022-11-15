import { Button, Table } from '@mantine/core';
import React from 'react';

function SaleInvoice({ sale }) {
  const handlePrint = () => {
    window.print();
  };
  // console.log('SaleInfo', sale);
  const saleInvoiceRows = sale?.productInvoiceLines?.map((saleLine) => 
  {
    console.log('saleLine', saleLine);
    return(
      <tr key={saleLine?.id} className="odd:bg-gray-900">
      <td>{saleLine?.price}</td>
      <td>{saleLine?.amount}</td>
      <td>{saleLine?.product.productBrand.value}</td>
      <td>{saleLine?.product.description}</td>
    </tr>
  )});
  // console.log('saleInvoiceRows', saleInvoiceRows);

  return (
    <div>
      <header>
        <div>
          <h2>Invoice</h2>
        </div>
        <div>
          <ul>
            <li>
              <Button onClick={handlePrint}>print</Button>
            </li>
            <li>download</li>
            <li>send</li>
          </ul>
        </div>
      </header>
      <section>
        <h2>Flexi Fix</h2>
        <p>
          Danmarksgade 86A<br></br> 9000 Aalborg{' '}
        </p>
        <p>+45 91 86 95 25</p>
        <p>flexi-fix@gmail.com</p>
        <p>CVR: 37692182</p>
      </section>
      {/* end of your info */}

      <section>
        <h2>Products</h2>
        <Table>
          <thead>
            <tr className="bg-primary-800">
              <th>Price</th>
              <th>Amount</th>
              <th>Brand</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{saleInvoiceRows}</tbody>
        </Table>
      </section>
    </div>
  );
}

export default SaleInvoice;
