import { StyleSheet, Text, View } from "react-native"

export const ComponenteReescrito = () => {
    return (
        // Estilos reescritos com classes
        <View className="flex-row flex-1 justify-between items-center p-16"></View>
    )
}

// Estilos originais
const styles = StyleSheet.create({
    row: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
    card: { flex: 1, alignItems: 'center' },
});