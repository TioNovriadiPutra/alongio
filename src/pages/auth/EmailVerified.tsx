import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthHeader, Button, MascotAnimation } from "@src/components/shared";
import { colors } from "@src/styles/colors";
import {
  AuthNavigationProp,
  EmailVerifiedRouteProp,
} from "@src/utils/navigation";
import { StyleSheet, Text, View } from "react-native";

const EmailVerified = () => {
  const route = useRoute<EmailVerifiedRouteProp>();
  const nav = useNavigation<AuthNavigationProp>();

  return (
    <View style={styles.container}>
      <AuthHeader withBack={false} />

      <View style={styles.content}>
        <MascotAnimation
          source={require("@src/assets/animations/auth-email-verified.json")}
          aspectRatio={350 / 232}
        />

        <View style={styles.descContainer}>
          <Text style={styles.title}>You’re verified.</Text>

          <Text style={styles.subTitle}>
            Your email is confirmed. Let’s set up your profile.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          label="Set up profile"
          onPress={() =>
            nav.replace("ProfileSetup", {
              id: route.params.id,
            })
          }
        />
      </View>
    </View>
  );
};

export default EmailVerified;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["cream"],
    paddingTop: 47,
    paddingHorizontal: 20,
    paddingBottom: 37,
  },
  content: {
    flex: 1,
    paddingTop: 35,
  },
  descContainer: {
    paddingTop: 47,
    gap: 24,
  },
  title: {
    fontFamily: "SpaceBold",
    fontSize: 36,
    color: colors["ink"],
    lineHeight: 39,
    letterSpacing: -1.18,
  },
  subTitle: {
    fontFamily: "DMRegular",
    fontSize: 16,
    color: colors["muted"],
    lineHeight: 22,
  },
  footer: {
    paddingTop: 24,
  },
});
