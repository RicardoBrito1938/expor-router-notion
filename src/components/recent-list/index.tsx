import { FlatList, Text, View } from "react-native";
import { s } from "./styles";
import { Recent } from "../recent";

type Data = {
  id: string;
  title: string;
  cover?: string;
};

type RecentListProps = {
  data: Data[];
};

export function RecentList({ data }: RecentListProps) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Recent</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Recent data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
      />
    </View>
  );
}
