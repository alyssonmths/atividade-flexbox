import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import { IconeComTexto } from './components/IconeComTexto';
import { LinhaDeAcoes } from './components/LinhaDeAcoes';
import { ListaDeChips } from './components/ListaDeChips';

export default function App() {
  return (
    <View style={styles.container}>
      <IconeComTexto />
      <LinhaDeAcoes />
      <ListaDeChips chips={['Chip 1', 'Chip 2', 'Chip 3', 'Chip 4', 'Chip 5', 'Chip 6', 'Chip 7', 'Chip 8', 'Chip 9']} />
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
