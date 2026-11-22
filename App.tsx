import { NavigationContainer } from "@react-navigation/native";
import AuthRoute from "@src/routes/AuthRoute";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.setOptions({
  duration: 2000,
  fade: true,
});

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthRoute />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
