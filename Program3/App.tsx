import React from "react";
import {
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.text}>Hellowwwww Dakshhhhhh!!!!!!</Text>
      <Text style={styles.text}>How are youuuuu!!!!</Text>

      <Image
        source={{
          uri: "https://www.adorama.com/alc/wp-content/uploads/2018/07/shutterstock_705417145-1.jpg",
        }}
        style={styles.image}
      />

      <Button
        title="Presss Meee"
        onPress={() => Alert.alert("Button Pressed!")}
      />

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => Alert.alert("Pressed Meeeee")}
        onLongPress={() =>
          Alert.alert("Hey techieeee you did long press!!!")
        }
      >
        <Text style={styles.touchText}>Press me Buddy</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.pressable}
        onPress={() => Alert.alert("Heyyyyyy boyyyyyy!!!")}
      >
        <Text style={styles.btnTxt}>Pressable</Text>
      </Pressable>

      <Pressable>
        <Text style={styles.smallText}>Hiiii</Text>
      </Pressable>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0052cc",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  image: {
    height: 200,
    width: 200,
    marginVertical: 10,
  },

  touchable: {
    padding: 15,
    backgroundColor: "red",
    marginTop: 15,
    borderRadius: 8,
  },

  touchText: {
    color: "white",
    fontWeight: "bold",
  },

  pressable: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFDF00",
    height: 50,
    width: 120,
    marginTop: 20,
    borderRadius: 8,
  },

  btnTxt: {
    color: "black",
    fontWeight: "600",
  },

  smallText: {
    marginTop: 20,
    fontSize: 16,
    color: "white",
  },
});
