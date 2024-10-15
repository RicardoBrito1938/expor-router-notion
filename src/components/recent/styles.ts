import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    height: 134,
    width: 134,
    borderRadius: 10,
    backgroundColor: colors.gray[700],
    overflow: "hidden",
  },
  icon: {
    position: "absolute",
    margin: 7,
    top: -16,
  },
  content: {
    width: "100%",
    height: "50%",
    padding: 12,
  },
  title: {
    color: colors.gray[100],
    fontSize: 16,
    marginTop: 10,
  },
  cover: {
    width: "100%",
    height: "50%",
    backgroundColor: colors.gray[600],
  },
});
