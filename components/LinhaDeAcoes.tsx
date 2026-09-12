import { Button, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export const LinhaDeAcoes = () => {
    return (
        <View className="flex-row justify-between items-center">
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
            <Button title="Ver mais" color={'black'}></Button>
        </View>
    )
}