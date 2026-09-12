import { useState } from "react"
import { Pressable, Text } from "react-native";

export const BotaoSeguir = () => {
    const [following, setFollowing] = useState(false);

    return (
        <Pressable
            className={following ? 'p-5 border border-blue-400' : 'p-5 bg-blue-400'}
            onPress={() => setFollowing(prev => !prev)}
        >
            <Text>{following ? 'Seguindo' : 'Seguir'}</Text>
        </Pressable>
    )
}