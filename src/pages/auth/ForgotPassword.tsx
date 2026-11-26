import { useNavigation } from "@react-navigation/native";
import { AuthHeader, Button, UITextInput } from "@src/components/shared";
import { colors } from "@src/styles/colors";
import { AuthNavigationProp } from "@src/utils/navigation";
import { Image } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ForgotPassword = () => {
  const nav = useNavigation<AuthNavigationProp>();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <View style={styles.container}>
      <AuthHeader />

      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Text style={styles.title}>Forgot your{"\n"}password?</Text>

          <Image
            source={require("@src/assets/images/forgotPassword.webp")}
            style={styles.forgotPassword}
            contentFit="contain"
            contentPosition="center"
          />
        </View>

        <Text style={styles.subTitle}>
          Enter the email for your Alongio account. We’ll send you a reset link.
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email must be filled!",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format!",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <UITextInput
              field={field}
              label="Email address"
              placeholder="Input your registered email address"
              type="email-address"
              error={error}
            />
          )}
        />
      </View>

      <View style={styles.footer}>
        <Button
          label="Send reset link"
          onPress={handleSubmit((data) =>
            nav.navigate("CheckInbox", {
              email: data.email,
            }),
          )}
        />

        <TouchableOpacity style={styles.link} onPress={() => nav.goBack()}>
          <Text style={styles.linkLabel}>Back to log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

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
  forgotPassword: {
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
    flex: 1,
    paddingTop: 65,
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
