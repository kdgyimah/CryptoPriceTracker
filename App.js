import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.asset}>
        <Image source={require("./assets/bitcoin.webp")} style={styles.icon} />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ ...styles.text, ...styles.assetTitle }}>Bitcoin</Text>
          <View style={{ ...styles.row }}>
            <View style={styles.assetRankContainer}>
              <Text style={styles.assetRankText}>1</Text>
            </View>
            <View style={{ ...styles.text, ...styles.assetSubText }}>
              <Text style={{ ...styles.text, ...styles.assetSubText }}>
                BTC _ 1,03 %
              </Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  asset: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  assetTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 25,
  },
  assetSubText: {
    fontWeight: "bold",
    color: "grey",
    fontSize: 20,
  },
  assetRankContainer: {
    backgroundColor: "#303645",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
  },
  assetRankText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    color: "white",
  },
  icon: {
    height: 60,
    width: 60,
  },
});
