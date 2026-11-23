import { colors } from "@src/styles/colors";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Button } from "@src/components/shared";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "@src/utils/navigation";

const Greeting = () => {
  const nav = useNavigation<AuthNavigationProp>();

  return (
    <View style={styles.container}>
      <Image
        source={require("@src/assets/images/logoFull.webp")}
        style={styles.logo}
      />

      <Image
        source={require("@src/assets/images/greetingIllustration.webp")}
        style={styles.illustration}
        contentFit="contain"
        contentPosition="center"
      />

      <View style={styles.descContainer}>
        <Text style={styles.quotes}>Little things.{"\n"}Better together.</Text>

        <Text style={styles.desc}>
          A playful place for plans, memories, and meals. Make it yours or share
          it with someone.
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          label="Get started"
          onPress={() => nav.navigate("Onboarding")}
        />

        <Button label="Log in" mode="secondary" />
      </View>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["cream"],
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 37,
  },
  logo: {
    width: 110,
    height: 40,
    marginBottom: 23.5,
  },
  illustration: {
    flex: 1,
  },
  descContainer: {
    paddingTop: 30,
    gap: 16,
    marginBottom: 23.5,
  },
  quotes: {
    fontFamily: "SpaceBold",
    fontSize: 36,
    lineHeight: 39,
    color: colors["ink"],
  },
  desc: {
    fontFamily: "DMRegular",
    fontSize: 16,
    lineHeight: 22,
    color: colors["muted"],
  },
  footer: {
    paddingTop: 24,
    gap: 12,
  },
});
