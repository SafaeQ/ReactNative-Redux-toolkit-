import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

function PrimaryButton({ title, onPress = () => {} }) {
  return (
      <TouchableOpacity activeOpacity={0.8} onPress= {onPress}>  
        <View style={styles.buttonContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:18,
  },
  buttonContainer: {
    backgroundColor: Colors.accent500,
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
});