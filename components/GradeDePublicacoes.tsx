import { Text, View } from 'react-native';

export interface GradeDePublicacoesProps {
  publicacoes: Array<string | number>;
}

export const GradeDePublicacoes = ({
  publicacoes,
}: GradeDePublicacoesProps) => {
  return (
    <View className="w-[90%] flex-row flex-wrap gap-x-[2%] gap-y-2">
      {publicacoes.map((publicacao, index) => {
        const ehCor = typeof publicacao === 'string';

        return (
          <View
            key={`${publicacao}-${index}`}
            className={`w-[32%] aspect-square rounded-lg ${
              ehCor ? '' : 'items-center justify-center bg-[#d9e2ec]'
            }`}
            style={ehCor ? { backgroundColor: publicacao } : undefined}
          >
            {!ehCor && (
              <Text className="text-xl font-bold text-[#243447]">{publicacao}</Text>
            )}
          </View>
        );
      })}
    </View>
  );
};
