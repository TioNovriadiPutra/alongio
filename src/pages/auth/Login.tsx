import { useNavigation } from "@react-navigation/native";
import { AuthHeader, Button, UITextInput } from "@src/components/shared";
import { colors } from "@src/styles/colors";
import { AuthNavigationProp } from "@src/utils/navigation";
import { Image } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const nav = useNavigation<AuthNavigationProp>();

  const { control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <View style={styles.container}>
      <AuthHeader onBack={() => nav.replace("Greeting")} />

      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Text style={styles.title}>Hello again.</Text>

          <Image
            source={require("@src/assets/images/loginVector.webp")}
            style={styles.loginVector}
            contentFit="contain"
            contentPosition="center"
          />
        </View>

        <Text style={styles.subTitle}>
          Log in to pick up where you left off.
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <UITextInput
              field={field}
              label="Email address"
              placeholder="Input your email"
              type="email-address"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <UITextInput
              field={field}
              label="Password"
              placeholder="Input your password"
              mode="password"
            />
          )}
        />

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotLabel}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Button label="Log in" />

        <View style={styles.registerContainer}>
          <Text style={styles.registerLabel}>New here? </Text>

          <TouchableOpacity onPress={() => nav.navigate("Register")}>
            <Text style={styles.registerLabel}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["cream"],
    paddingHorizontal: 20,
    paddingTop: 47,
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
  loginVector: {
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
    paddingTop: 45,
    gap: 14,
  },
  forgotButton: {
    marginTop: 6,
    alignSelf: "flex-end",
  },
  forgotLabel: {
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
  },
  footer: {
    paddingTop: 24,
    gap: 12,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  registerLabel: {
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
  },
});
