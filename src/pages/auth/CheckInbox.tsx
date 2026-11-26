import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthHeader, Button, MascotAnimation } from "@src/components/shared";
import { colors } from "@src/styles/colors";
import { AuthNavigationProp, CheckInboxRouteProp } from "@src/utils/navigation";
import { Refresh, TickCircle } from "iconsax-react-nativejs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CheckInbox = () => {
  const route = useRoute<CheckInboxRouteProp>();
  const nav = useNavigation<AuthNavigationProp>();

  return (
    <View style={styles.container}>
      <AuthHeader withBack={false} />

      <View style={styles.content}>
        <MascotAnimation
          source={require("@src/assets/animations/auth-reset-inbox.json")}
          aspectRatio={350 / 232}
        />

        <View style={styles.descContainer}>
          <Text style={styles.title}>Check your inbox.</Text>

          <Text style={styles.subTitle}>
            If there’s an account for mia@example.com, a reset link will arrive
            shortly.
          </Text>
        </View>

        <View style={styles.tagContainer}>
          <Text style={styles.notify}>
            Check your spam folder if you don’t see the email.
          </Text>

          <View style={styles.card}>
            <View style={styles.box}>
              <TickCircle size={12} color={colors["ink"]} />
            </View>

            <View style={styles.cardDesc}>
              <Text style={styles.cardTitle}>Reset link sent</Text>

              <Text style={styles.cardSubTitle}>
                Check your inbox for the new link.
              </Text>
            </View>

            <TouchableOpacity style={styles.close}>
              <Refresh size={20} color={colors["ink"]} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          label="Back to log in"
          onPress={() =>
            nav.replace("ChangePassword", {
              token: "token123",
            })
          }
        />

        <TouchableOpacity style={styles.link} onPress={() => nav.goBack()}>
          <Text style={styles.linkLabel}>Try a different email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckInbox;

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
  tagContainer: {
    paddingTop: 32,
    gap: 13,
  },
  notify: {
    fontFamily: "DMRegular",
    fontSize: 13,
    color: colors["muted"],
    lineHeight: 18,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 12,
    backgroundColor: colors["green"],
    borderRadius: 16,
    gap: 12,
  },
  box: {
    width: 32,
    height: 32,
    backgroundColor: colors["cream"],
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardDesc: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    fontFamily: "SpaceBold",
    fontSize: 18,
    color: colors["ink"],
    lineHeight: 23,
  },
  cardSubTitle: {
    fontFamily: "DMRegular",
    fontSize: 14,
    color: colors["ink"],
    lineHeight: 19,
  },
  close: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    paddingTop: 24,
    gap: 12,
  },
  link: {
    alignSelf: "center",
    marginVertical: 15,
  },
  linkLabel: {
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
  },
});
