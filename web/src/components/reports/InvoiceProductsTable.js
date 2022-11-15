import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react'
import { InvoiceProductsRow } from './InvoiceProductsRow';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        width: '60%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    price: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '15%'
    },
});

export const InvoiceProductsTable = ({ repair }) => {
    const totalPrice = repair?.productInvoiceLines.reduce((acc, obj) => {
        return acc + obj.product.sellPrice
    }, 0)
    return (
        <View >
            <View style={styles.container}>
                <Text style={styles.description}>Parts Description</Text>
                <Text style={styles.price}>Unit (ex)</Text>
                <Text style={styles.qty}>VAT</Text>
                <Text style={styles.price}>Unit (inc)</Text>
                <Text style={styles.qty}>QTY</Text>
                <Text style={styles.amount}>Total</Text>
            </View>
            <InvoiceProductsRow items={repair?.productInvoiceLines} />
            <View style={styles.container}>
                <Text style={styles.description} >Total</Text>
                <Text >{totalPrice * 1.25}</Text>
            </View>
        </View>
    )
}


