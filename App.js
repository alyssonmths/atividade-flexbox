import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import { IconeComTexto } from './components/IconeComTexto';
import { LinhaDeAcoes } from './components/LinhaDeAcoes';

export default function App() {
  return (
    <View style={styles.container}>
      <IconeComTexto />
      <LinhaDeAcoes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
});
