import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("clicked");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Open up App.js to start working on app!ascasa sdasdasdas dasdadasdaadsa
      </Text>
      <Button
        color="green"
        title="click me"
        onPress={() =>
          Alert.alert("my title", "my message", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        }
      />
      <Button
        title="also click me"
        onPress={() =>
          Alert.prompt("My title", "my message", (text) => console.log(text))
        }
      />
      <TouchableNativeFeedback
        onPress={() => {
          console.log(handlePress);
        }}
      >
        <Image
          // fadeDuration={10000}
          // blurRadius={10}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableNativeFeedback>
      <View
        style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
      ></View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
