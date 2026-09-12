import { useState } from "react"
import { Pressable, Text } from "react-native";

export const BotaoSeguir = () => {
    const [following, setFollowing] = useState(false);

    return (
        <Pressable
            className={following ? 'w-screen p-5 border border-blue-400' : 'w-screen p-5 bg-blue-400'}
            onPress={() => setFollowing(prev => !prev)}
        >
            <Text className="text-center">{following ? 'Seguindo' : 'Seguir'}</Text>
        </Pressable>
    )
}