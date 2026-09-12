import { Image, Text, View } from "react-native"
import { ListaDeChips } from "../ListaDeChips"
import GradeDePublicacoes from "../GradeDePublicacoes"
import { BotaoSeguir } from "../BotaoSeguir"

export const TelaPerfil = () => {
    return (
        <View className="items-center">
            {/* Header */}
            <View className="flex-row items-center gap-5">
                <Image source={require('../../assets/avatar.png')} className="w-24 h-24" />
                <View>
                    <Text>Alysson Matheus</Text>
                    <Text className="font-bold">@alyssonmths</Text>
                </View>
            </View>

            {/* Estatísticas */}
            <View className="flex-row border w-96 justify-evenly mt-5">
                <Text>Posts 5</Text>
                <Text>Seguidores 67</Text>
                <Text>Seguindo 60</Text>
            </View>

            <Text className="mt-6 mb-2 ms-5 self-start">Interesses:</Text>

            <ListaDeChips chips={['Jogos', 'Música', 'Natureza', 'Filmes', 'Viajar', 'Cachorros', 'Café', 'Trabalho']} />

            <GradeDePublicacoes
                publicacoes={[
                    '#F87171', '#FB923C', '#60A5FA', '#FACC15', '#4ADE80', '#A78BFA', '#F472B6', '#94A3B8', '#34D399'
                ]}
            />

            <BotaoSeguir />

        </View>
    )
}