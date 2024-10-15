import { FlatList, Pressable, Text, View } from "react-native";
import { s } from "./styles";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Page } from "../page";

type Data = {
  id: string;
  title: string;
};

type Props = {
  data: Data[];
};

export function PageList({ data }: Props) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Private</Text>
        <Pressable>
          <Feather name="more-horizontal" size={24} color={colors.gray[300]} />
        </Pressable>

        <Pressable>
          <Feather name="plus" size={24} color={colors.gray[300]} />
        </Pressable>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Page title={item.title} />}
        showsVerticalScrollIndicator={false}
        style={s.list}
        ItemSeparatorComponent={() => <View style={s.separator} />}
        scrollEnabled={false}
      />
    </View>
  );
}
