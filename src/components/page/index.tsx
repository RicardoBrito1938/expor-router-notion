import { View, Text, Pressable } from "react-native";
import { s } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
  title: string;
};

export function Page({ title }: Props) {
  return (
    <View style={s.container}>
      <Feather name="chevron-right" size={24} color={colors.gray[300]} />
      <Feather name="file-text" size={24} color={colors.gray[300]} />

      <Text style={s.title}>{title}</Text>

      <Pressable>
        <Feather name="plus" size={24} color={colors.gray[300]} />
      </Pressable>
    </View>
  );
}
