import { View, Pressable, Image, Text } from "react-native";
import { s } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Data = {
  title: string;
  cover?: string;
};

type Props = {
  data: Data;
};

export function Recent({ data }: Props) {
  return (
    <Pressable style={s.container}>
      <Image style={s.cover} source={{ uri: data.cover }} />

      <View style={s.content}>
        <Feather
          name="file-text"
          size={32}
          color={colors.gray[100]}
          style={s.icon}
        />
        <Text style={s.title} numberOfLines={2}>
          {data.title}
        </Text>
      </View>
    </Pressable>
  );
}
