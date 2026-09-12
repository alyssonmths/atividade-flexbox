import { Text, View } from "react-native"
import { ChipProps, ListaDeChipsProps } from "./interfaces/ListaDeChipsInterfaces"


export const ListaDeChips = (props: ListaDeChipsProps) => {
    return (
        <View className="flex-row justify-center gap-5 flex-wrap">
            {props.chips.map(chip => (
                <Chip text={chip} />
            ))}
        </View>
    )
}

const Chip = (props: ChipProps) => {
    return (
        <View className="p-5 rounded-xl border">
            <Text>{props.text}</Text>
        </View>
    )
}