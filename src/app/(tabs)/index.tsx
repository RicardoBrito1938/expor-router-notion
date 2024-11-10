import { Header } from "@/components/header";
import { PageList } from "@/components/page-list";
import { RecentList } from "@/components/recent-list";
import { DATA } from "@/utils/data";
import { Alert, ScrollView, Text, View } from "react-native";
import { Button } from "rn-design-system/dist";

export default function Index() {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={{ flex: 1, paddingTop: 32 }}>
      <Header />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginHorizontal: 16 }}>
        Helloo
      </Text>

      <Button title="Click me" onPress={createTwoButtonAlert} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 100,
        }}
      >
        <RecentList data={DATA.RECENT} />
        <PageList data={DATA.PAGES} />
      </ScrollView>
    </View>
  );
}
