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
  time: {
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


export const InvoiceTasksRow = ({ items }) => {
  const rows = items?.map(item => {
    const vat = item.price * 0.25
    return (
      <View key={item.id} style={styles.row}>
        <Text style={styles.description} >{item.task.taskCategory.name}     {item.task.name}</Text>
        <Text style={styles.time} >{item.time}</Text>
        <Text style={styles.price} >{item.price}</Text>
        <Text style={styles.price} >{vat}</Text>
        <Text style={styles.amount} >{item.price + vat}</Text>
      </View>

    )
  }
  )
  return (
    <Fragment>{rows}</Fragment>
  )
}
