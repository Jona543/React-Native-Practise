import { StatusBar } from "expo-status-bar";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
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
  Platform,
  Dimensions,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("clicked");
  };
  const { landscape, portrait } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
    // justifyContent: "center",
    // textAlign: "center",
  },
});
