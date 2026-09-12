import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import { IconeComTexto } from './components/IconeComTexto';
import { LinhaDeAcoes } from './components/LinhaDeAcoes';
import { ListaDeChips } from './components/ListaDeChips';
import { GradeDePublicacoes } from './components/GradeDePublicacoes';
import { BotaoSeguir } from './components/BotaoSeguir';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <IconeComTexto /> */}

      {/* <LinhaDeAcoes /> */}

      {/* <ListaDeChips chips={['Chip 1', 'Chip 2', 'Chip 3', 'Chip 4', 'Chip 5', 'Chip 6', 'Chip 7', 'Chip 8', 'Chip 9']} /> */}

      {/* <GradeDePublicacoes
        publicacoes={[
          '#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d',
          '#43aa8b', '#4d908e', '#577590', '#277da1', '#9b5de5',
        ]}
      /> */}

      <BotaoSeguir />
      
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
