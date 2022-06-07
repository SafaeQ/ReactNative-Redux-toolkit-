import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, FlatList, Dimensions, ActivityIndicator, Pressable, Image } from 'react-native';
import { Button } from 'react-bootstrap';

import { decrement, increment } from './CartSlice'
import PrimaryButton from '../components/PrimaryBtn'



const CartView = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

  return (
    <>
        <View>
            <Text>Count : {count} </Text>
            <Button onClick={ () => {dispatch(increment())} }>+</Button>
            <Button onPress={ () => {dispatch(decrement())} }>-</Button>
        </View>
    </>
  )
}

export default CartView