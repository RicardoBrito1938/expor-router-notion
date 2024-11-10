import { Header } from "@/components/header";
import { PageList } from "@/components/page-list";
import { RecentList } from "@/components/recent-list";
import { DATA } from "@/utils/data";
import { ScrollView, Alert, View } from "react-native";
import { Button, Heading } from "@sf-digital-ui/react-native";

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
      <Button title="Click me" onPress={createTwoButtonAlert} />
      <Heading variant="h1">Recent</Heading>
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
