import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors } from "@src/styles/colors";
import { AuthHeader, Button } from "@src/components/shared";
import { Image } from "expo-image";
import { Lock1 } from "iconsax-react-nativejs";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "@src/utils/navigation";

const SPACE_DATA = [
  {
    label: "Personal mode",
    desc: "A private space for your plans, diary, and meals.",
    vector: require("@src/assets/images/personalVector.webp"),
    value: "personal",
    color: colors["green"],
  },
  {
    label: "Couple mode",
    desc: "Plan together and share the moments you choose.",
    vector: require("@src/assets/images/coupleVector.webp"),
    value: "couple",
    color: colors["indigo"],
  },
];

const SpaceSetup = () => {
  const [currSpace, setCurrSpace] = useState<string | null>(null);

  const nav = useNavigation<AuthNavigationProp>();

  return (
    <View style={styles.container}>
      <AuthHeader onBack={() => nav.replace("Greeting")} />

      <View style={styles.header}>
        <Text style={styles.title}>Find your space.</Text>

        <Text style={styles.subTitle}>
          Start on your own or make room for someone. You can switch modes
          later.
        </Text>
      </View>

      <View style={styles.formContainer}>
        {SPACE_DATA.map((item, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.selectButton,
              { backgroundColor: item.color },
              currSpace === item.value && styles.activeSelectButton,
            ]}
            onPress={() => setCurrSpace(item.value)}
          >
            <Image
              source={item.vector}
              style={styles.vector}
              contentFit="contain"
              contentPosition="center"
            />

            <View style={styles.descContainer}>
              <Text style={styles.descTitle}>{item.label}</Text>

              <Text style={styles.descSubTitle}>{item.desc}</Text>
            </View>

            <View style={styles.outerCircle}>
              {currSpace === item.value && <View style={styles.innerCircle} />}
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.card}>
          <Lock1 size={20} color={colors["ink"]} />

          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              Your diary entries stay private until you choose to share them.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          label={`Continue${currSpace ? ` in ${SPACE_DATA.find((item) => item.value === currSpace)?.label}` : ""}`}
          disabled={currSpace === null}
        />
      </View>
    </View>
  );
};

export default SpaceSetup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["cream"],
    paddingTop: 47,
    paddingHorizontal: 20,
    paddingBottom: 37,
  },
  header: {
    paddingTop: 39,
    gap: 8,
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
  formContainer: {
    flex: 1,
    paddingTop: 59,
    gap: 16,
  },
  selectButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 132,
    paddingLeft: 17,
    paddingRight: 66,
    borderRadius: 20,
    gap: 19,
  },
  activeSelectButton: {
    borderWidth: 1,
    borderColor: colors["ink"],
  },
  vector: {
    width: 52,
    height: 72,
  },
  descContainer: {
    gap: 10,
    flex: 1,
  },
  descTitle: {
    fontFamily: "SpaceBold",
    fontSize: 20,
    color: colors["ink"],
    letterSpacing: -0.35,
  },
  descSubTitle: {
    fontFamily: "DMRegular",
    fontSize: 14,
    color: colors["ink"],
    lineHeight: 20,
  },
  outerCircle: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: "50%",
    borderWidth: 1.6,
    borderColor: colors["ink"],
    top: 21,
    right: 21,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: colors["ink"],
  },
  card: {
    marginTop: 10,
    padding: 20,
    backgroundColor: colors["lavender"],
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
  },
  messageContainer: {
    flex: 1,
  },
  message: {
    fontFamily: "DMRegular",
    fontSize: 14,
    color: colors["ink"],
    lineHeight: 19,
  },
  footer: {
    paddingTop: 24,
  },
});
