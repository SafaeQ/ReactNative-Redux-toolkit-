import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { Provider } from 'react-redux';
import CartView from './screens/Cart';

import store from './app/store'

export default function App() {
  return (
    <Provider store= {store}>
      <Home/>
    </Provider>
  );
}

