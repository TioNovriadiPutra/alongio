import { StyleSheet, View } from "react-native";
import BackButton from "./BackButton";
import { Image } from "expo-image";

type Props = {
  onBack?: () => void;
};

const AuthHeader = ({ onBack }: Props) => {
  return (
    <View style={styles.header}>
      <BackButton onPress={onBack} />

      <Image
        source={require("@src/assets/images/logoFull.webp")}
        style={styles.logo}
      />
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 110,
    height: 40,
  },
});
