import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AuthHeader,
  Button,
  UIProfileImageInput,
  UITextInput,
} from "@src/components/shared";
import { colors } from "@src/styles/colors";
import {
  AuthNavigationProp,
  ProfileSetupRouteProp,
} from "@src/utils/navigation";
import { Image } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

const ProfileSetup = () => {
  const route = useRoute<ProfileSetupRouteProp>();
  const nav = useNavigation<AuthNavigationProp>();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      profile_pic: null,
      username: "",
    },
  });

  return (
    <View style={styles.container}>
      <AuthHeader onBack={() => nav.replace("Greeting")} />

      <View style={styles.headingContainer}>
        <View style={styles.heading}>
          <Text style={styles.title}>Make it yours.</Text>

          <Image
            source={require("@src/assets/images/registerLove.webp")}
            style={styles.registerLove}
            contentFit="contain"
            contentPosition="center"
          />
        </View>

        <Text style={styles.subTitle}>
          Choose the name you’d like to use in Alongio.
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="profile_pic"
          render={({ field }) => <UIProfileImageInput field={field} />}
        />

        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <UITextInput
              field={field}
              label="Display name"
              placeholder="Create your username"
            />
          )}
        />
      </View>

      <View style={styles.footer}>
        <Button
          label="Continue"
          onPress={handleSubmit(() =>
            nav.navigate("SpaceSetup", {
              id: route.params.id,
            }),
          )}
        />
      </View>
    </View>
  );
};

export default ProfileSetup;

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
  registerLove: {
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
    paddingTop: 34,
    gap: 50,
  },
  footer: {
    paddingTop: 24,
  },
});
