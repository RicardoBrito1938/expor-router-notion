import { colors } from "@/styles/colors";
import { Text, View } from "react-native";

export default function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: colors.white }}>Notifications</Text>
    </View>
  );
}
