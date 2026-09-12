import { Text, View } from "react-native";

const COLUMNS = 3;
const GAP = 2;
const ITEM_WIDTH = (100 - GAP * (COLUMNS - 1)) / COLUMNS; // 32 no exemplo

type Publicacao = number | string;

interface GradeDePublicacoesProps {
    publicacoes: Publicacao[];
}

const CORES_FICTICIAS = [
    "#F87171",
    "#FB923C",
    "#FACC15",
    "#4ADE80",
    "#60A5FA",
    "#A78BFA",
    "#F472B6",
    "#94A3B8",
    "#34D399",
];

function resolveCor(item: Publicacao, index: number): string {
    if (typeof item === "string") 
        return item;
    
    return CORES_FICTICIAS[index % CORES_FICTICIAS.length];
}

export default function GradeDePublicacoes({
    publicacoes,
}: GradeDePublicacoesProps) {
    return (
        <View className="w-full flex-row flex-wrap mt-5 p-5">
            {publicacoes.map((item, index) => {
                const isUltimaDaLinha = (index + 1) % COLUMNS === 0;
                const cor = resolveCor(item, index);

                return (
                    <View
                        key={index}
                        className="aspect-square rounded-md items-center justify-center mb-[2%]"
                        style={{
                            width: `${ITEM_WIDTH}%`,
                            marginRight: isUltimaDaLinha ? 0 : `${GAP}%`,
                            backgroundColor: typeof item === "string" ? cor : cor,
                        }}
                    >
                        <Text className="text-white font-bold text-xs">
                            {typeof item === "number" ? item : ""}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}
