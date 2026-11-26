import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthHeader, Button, UITextInput } from "@src/components/shared";
import { colors } from "@src/styles/colors";
import {
  AuthNavigationProp,
  ChangePasswordRouteProp,
} from "@src/utils/navigation";
import { Image } from "expo-image";
import { Controller, useForm, useWatch } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

const ChangePassword = () => {
  const route = useRoute<ChangePasswordRouteProp>();
  const nav = useNavigation<AuthNavigationProp>();

  const { control } = useForm({
    defaultValues: {
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
      <AuthHeader onBack={() => nav.replace("Login")} />

      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Text style={styles.title}>Choose a new{"\n"}password.</Text>

          <Image
            source={require("@src/assets/images/changePassword.webp")}
            style={styles.changePassword}
            contentFit="contain"
            contentPosition="center"
          />
        </View>

        <Text style={styles.subTitle}>Use a password you can remember.</Text>
      </View>

      <View style={styles.formContainer}>
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
              label="New password"
              placeholder="Create your new password"
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
              placeholder="Input your new password"
              mode="password"
              error={error}
            />
          )}
        />
      </View>

      <View style={styles.footer}>
        <Button label="Reset password" onPress={() => nav.replace("Login")} />
      </View>
    </View>
  );
};

export default ChangePassword;

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
  changePassword: {
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
  footer: {
    paddingTop: 24,
  },
});
