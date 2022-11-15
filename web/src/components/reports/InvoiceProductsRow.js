import { Text, View, StyleSheet } from '@react-pdf/renderer'
import React, { Fragment } from 'react'

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '60%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    price: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    amount: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});


export const InvoiceProductsRow = ({ items }) => {
    const rows = items?.map(item => {
        const vat = item.product.sellPrice * 0.25
        return (
            <View key={item.id} style={styles.row}>
                <Text style={styles.description} >{item.product.productCategory.value}     {item.product.productBrand.value}</Text>
                <Text style={styles.price} >{item.product.sellPrice}</Text>
                <Text style={styles.qty} >{vat}</Text>
                <Text style={styles.price} >{item.product.sellPrice + vat} </Text>
                <Text style={styles.qty} >{item.amount}</Text>
                <Text style={styles.amount} >{(item.product.sellPrice + vat) * item.amount} </Text>
            </View>
        )
    })
    return (
        <Fragment>{rows}</Fragment>
    )
}
