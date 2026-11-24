import { NavigationContainer } from "@react-navigation/native";
import AuthRoute from "@src/routes/AuthRoute";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.setOptions({
  duration: 2000,
  fade: true,
});

const App = () => {
  const [fontsLoaded] = useFonts({
    SpaceBold: require("@src/assets/fonts/SpaceGrotesk-Bold.ttf"),
    DMBold: require("@src/assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("@src/assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("@src/assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <AuthRoute />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
