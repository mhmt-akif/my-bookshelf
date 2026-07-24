import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%", // Tüm genişliği kaplasın
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Sol, orta ve sağ bileşenleri iki uca iter
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1C1B1F",
    textAlign: "center",
    flex: 1, // Başlığı tam ortada tutar
  },
  iconBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;