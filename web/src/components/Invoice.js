import { gql } from '@apollo/client'
import { Button, Table } from '@mantine/core'
import React from 'react'

const GET_ALL_INVOICE_LINES = gql`
query TaskInvoiceLines($repairId: String) {
  taskInvoiceLines(repairId: $repairId) {
    id
    task {
      name
    }
    amount
    time
    price
    fkRepairId
  }
}
`

function Invoice() {
    const handlePrint = () => {
        window.print()
    }
    return (
        <div>
            <header>
                <div><h2>Invoice</h2></div>
                <div>
                    <ul>
                        <li><Button onClick={handlePrint}>print</Button></li>
                        <li>download</li>
                        <li>send</li>
                    </ul>
                </div>
            </header>
            <section>
                <h2>Flexi Fix</h2>
                <p>Danmarksgade 86A<br></br> 9000 Aalborg </p>
                <p>phone</p>
                <p>email</p>
                <p>CVR</p>
            </section>
            {/* end of your info */}


            <section>
                <p>Customer</p>
                <p>bicycle</p>
            </section>
            {/* end of customer info */}


            <section>
                <p>mechanic</p>
                <p>issued</p>
                <p>payment method</p>
            </section>

            <section>

                <Table>
                    <thead>
                        <tr className="bg-primary-800">
                            <th><h2>Labour description</h2></th>
                            <th></th>
                            <th>Hours</th>
                            <th>Price</th>
                            <th>VAT</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </Table>
                <Table>
                    <thead>
                        <tr className="bg-primary-800">
                            <th><h2>Parts description</h2></th>
                            <th></th>
                            <th>Hours</th>
                            <th>Price</th>
                            <th>VAT</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </Table>
                <Table>
                    <thead>
                        <tr className="bg-primary-800">
                            <th><h2>Extras description</h2></th>
                            <th></th>
                            <th>Hours</th>
                            <th>Price</th>
                            <th>VAT</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            </section>
        </div >
    )
}

export default Invoice