import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import { IconeComTexto } from './components/IconeComTexto';
import { LinhaDeAcoes } from './components/LinhaDeAcoes';
import { ListaDeChips } from './components/ListaDeChips';
import { BotaoSeguir } from './components/BotaoSeguir';
import { ComponenteReescrito } from './components/ComponenteReescrito';
import { TelaPerfil } from './components/desafio-final/TelaPerfil';
import GradeDePublicacoes from './components/GradeDePublicacoes';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <IconeComTexto /> */}

      {/* <LinhaDeAcoes /> */}

      {/* <ListaDeChips chips={['Chip 1', 'Chip 2', 'Chip 3', 'Chip 4', 'Chip 5', 'Chip 6', 'Chip 7', 'Chip 8', 'Chip 9']} /> */}

      {/* <GradeDePublicacoes
        publicacoes={[
          '#F87171', '#FB923C', '#60A5FA', '#FACC15', '#4ADE80', '#A78BFA', '#F472B6', '#94A3B8', '#34D399'
        ]}
      /> */}

      {/* <BotaoSeguir /> */}

      {/* <ComponenteReescrito /> */}

      <TelaPerfil />

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
