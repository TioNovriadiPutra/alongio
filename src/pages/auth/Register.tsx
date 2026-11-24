import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "@src/styles/colors";
import {
  AuthHeader,
  BackButton,
  Button,
  UITextInput,
} from "@src/components/shared";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "@src/utils/navigation";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Sms } from "iconsax-react-nativejs";

const Register = () => {
  const nav = useNavigation<AuthNavigationProp>();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const password = useWatch({
    control,
    name: "password",
  });

  return (
    <View style={styles.container}>
      <AuthHeader onBack={() => nav.replace("Greeting")} />

      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Text style={styles.title}>Create your{"\n"}account.</Text>

          <Image
            source={require("@src/assets/images/registerStar.webp")}
            style={styles.registerStar}
            contentFit="contain"
            contentPosition="center"
          />
        </View>

        <Text style={styles.subTitle}>
          Start with an email address and password.
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
              placeholder="Input your email address"
              type="email-address"
              error={error}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password must be filled!",
            minLength: {
              value: 8,
              message: "Password must at least 8 characters!",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <UITextInput
              field={field}
              label="Password"
              placeholder="Create your password"
              mode="password"
              error={error}
            />
          )}
        />

        <Controller
          control={control}
          name="confirm_password"
          rules={{
            required: "Password confirmation must be filled!",
            validate: (val) =>
              val === password || "Password confirmation failed!",
          }}
          render={({ field, fieldState: { error } }) => (
            <UITextInput
              field={field}
              label="Confirm password"
              placeholder="Input your password"
              mode="password"
              error={error}
            />
          )}
        />

        <View style={styles.box}>
          <Sms size={20} color={colors["ink"]} />

          <Text style={styles.boxDesc}>
            We’ll email you a code to verify your address.
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          label="Create account"
          onPress={handleSubmit((data) =>
            nav.navigate("VerifyEmail", {
              email: data.email,
            }),
          )}
        />

        <View style={styles.linkContainer}>
          <Text style={styles.link}>Already have an account? </Text>

          <TouchableOpacity>
            <Text style={styles.link}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
  registerStar: {
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
    paddingTop: 60,
    gap: 14,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15.5,
    paddingTop: 13,
    paddingRight: 13,
    paddingBottom: 9,
    backgroundColor: colors["lavender"],
    marginTop: 6,
    borderRadius: 16,
    gap: 12.5,
  },
  boxDesc: {
    fontFamily: "DMRegular",
    fontSize: 14,
    color: colors["ink"],
    lineHeight: 19,
  },
  footer: {
    paddingTop: 24,
    gap: 12,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  link: {
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
  },
});
