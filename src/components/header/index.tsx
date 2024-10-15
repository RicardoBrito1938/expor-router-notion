import { View, Image, Text, Pressable } from "react-native";
import { s } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function Header() {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{ uri: "https://avatars.githubusercontent.com/u/51454097?v=4" }}
      />
      <View style={s.user}>
        <Text style={s.name}>Ricardo Brito</Text>
        <Text style={s.email}>ricardo.jucrist@hotmail.com</Text>
      </View>

      <Pressable onPress={() => {}}>
        <Feather name="more-horizontal" size={20} color={colors.gray[100]} />
      </Pressable>
    </View>
  );
}
