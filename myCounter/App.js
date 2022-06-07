import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { Provider } from 'react-redux';
import CartView from './screens/Cart';


export default function App() {
  return (
    <View>
      {/* <Home/> */}
      <CartView/>
    </View>
  );
}

