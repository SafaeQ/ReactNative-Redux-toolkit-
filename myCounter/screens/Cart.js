import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, FlatList, Dimensions, ActivityIndicator, Pressable, Image } from 'react-native';


import { decrement, increment } from './CartSlice'
import PrimaryButton from '../components/PrimaryBtn'



const CounterView = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

  return (
    <>
        <View>
            <Text>Count : {count} </Text>
            <PrimaryButton onPress={ () => {dispatch(increment())} } title={'+'} />
            <PrimaryButton onPress={ () => {dispatch(decrement())} } title={'-'} />
        </View>
    </>
  )
}

export default CounterView