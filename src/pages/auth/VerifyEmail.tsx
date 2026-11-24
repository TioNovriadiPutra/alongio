import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "@src/styles/colors";
import { AuthHeader, Button, UIOTPInput } from "@src/components/shared";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AuthNavigationProp,
  VerifyEmailRouteProp,
} from "@src/utils/navigation";
import { Image } from "expo-image";
import { Controller, useForm } from "react-hook-form";

const VerifyEmail = () => {
  const route = useRoute<VerifyEmailRouteProp>();
  const nav = useNavigation<AuthNavigationProp>();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  return (
    <View style={styles.container}>
      <AuthHeader onBack={() => nav.replace("Greeting")} />

      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Text style={styles.title}>Verify your{"\n"}email.</Text>

          <Image
            source={require("@src/assets/images/registerEmail.webp")}
            style={styles.registerEmail}
            contentFit="contain"
            contentPosition="center"
          />
        </View>

        <Text style={styles.subTitle}>
          Enter the six-digit code sent to{"\n"}
          {route.params.email}
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="otp"
          rules={{
            validate: (val) =>
              !val.some((text) => text === "") || "Code must be filled!",
          }}
          render={({ field, fieldState: { error } }) => (
            <UIOTPInput field={field} label="Verification code" error={error} />
          )}
        />
      </View>

      <View style={styles.footer}>
        <Button
          label="Verify email"
          onPress={handleSubmit(() => {
            nav.replace("ProfileSetup", {
              id: "tio",
            });
          })}
        />

        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => nav.replace("Register")}
        >
          <Text style={styles.link}>Change email address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["cream"],
    paddingTop: 47,
    paddingHorizontal: 20,
    paddingBottom: 37,
  },
  headingContainer: {
    paddingTop: 37,
    gap: 8,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "SpaceBold",
    fontSize: 36,
    color: colors["ink"],
    lineHeight: 39,
    letterSpacing: -1.18,
  },
  registerEmail: {
    width: 76,
    height: 76,
  },
  subTitle: {
    fontFamily: "DMRegular",
    fontSize: 16,
    color: colors["muted"],
    lineHeight: 22,
  },
  formContainer: {
    paddingTop: 65,
    flex: 1,
  },
  footer: {
    paddingTop: 24,
    gap: 12,
  },
  link: {
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
  },
  linkContainer: {
    alignSelf: "center",
    marginVertical: 15,
  },
});
