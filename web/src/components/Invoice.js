import { Button, Table } from '@mantine/core'
import React from 'react'

function Invoice({ repair }) {
    const handlePrint = () => {
        window.print()
    }
    console.log("repairinfo", repair);
    const tasksInvoiceRows = repair?.taskInvoiceLines?.map((taskLine) => (
        <tr key={taskLine.id} className="odd:bg-gray-900">
            <td>{taskLine.task.taskCategory.name}</td>
            <td>{taskLine.task.name}</td>
            <td>{taskLine.time}</td>
            <td>{taskLine.price}</td>
            <td>25</td>
            <td>xxxx</td>

        </tr>
    ))
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
                <p>+45 91 86 95 25</p>
                <p>flexi-fix@gmail.com</p>
                <p>CVR: 37692182</p>
            </section>
            {/* end of your info */}


            <section>
                <p>Repair Number: {repair.number}</p>
                <p>Customer: {repair?.customer?.fullName}</p>
                <p>Bicycle: <span>{repair?.bicycle?.brand?.name}</span></p>
            </section>
            {/* end of customer info */}


            <section>
                <p>Mechanic: {repair?.technician?.name}</p>
                <p>issued</p>
                <p>Payment method: {repair?.paymentMethod}</p>
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
                    <tbody>{tasksInvoiceRows}</tbody>
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