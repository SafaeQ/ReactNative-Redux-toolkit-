import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, FlatList, Dimensions, ActivityIndicator, Pressable, Image } from 'react-native';
import { decrement, increment, reset, increaseByAmount } from './CartSlice'

const CounterView = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

  return (
    <>
        <View>
            <Text>Count : {count} </Text>
            <button onClick={ () => {dispatch(increment())} } >Increment</button>
            <button onClick={ () => {dispatch(decrement())} } >Decrement</button>
        </View>
    </>
  )
}

export default CounterView