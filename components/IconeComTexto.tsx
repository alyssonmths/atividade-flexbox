import { Text, View } from "react-native"

export const IconeComTexto = () => {
    return (
        <View className="flex-row gap-2">
            <View className="w-24 h-24 border"></View>
            <Text className="align-middle">Texto do ícone</Text>
        </View>
    )
}