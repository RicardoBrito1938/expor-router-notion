import { Header } from "@/components/header";
import { PageList } from "@/components/page-list";
import { RecentList } from "@/components/recent-list";
import { DATA } from "@/utils/data";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, paddingTop: 32 }}>
      <Header />
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
