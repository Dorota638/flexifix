import { View, Text, StyleSheet } from '@react-pdf/renderer';
import React from 'react'
import { InvoiceTasksRow } from './InvoiceTasksRow';

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
  hours: {
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

export const InvoiceTasksTable = ({ repair }) => {

  const totalPrice = repair?.taskInvoiceLines.reduce((acc, obj) => {
    return acc + obj.price
  }, 0)

  console.log('totalPrice', totalPrice);
  console.log('repair?.taskInvoiceLines', repair?.taskInvoiceLines);
  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.description}>Labor Description</Text>
        <Text style={styles.hours}>Hours</Text>
        <Text style={styles.price}>Price</Text>
        <Text style={styles.price}>VAT</Text>
        <Text style={styles.amount}>Total</Text>
      </View>
      <InvoiceTasksRow items={repair?.taskInvoiceLines} />

      <View style={styles.container}>
        <Text style={styles.description} >Total</Text>
        <Text >{totalPrice * 1.25}</Text>
      </View>

    </View>
  )
}


