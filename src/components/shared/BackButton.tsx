import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "@src/styles/colors";
import { Image } from "expo-image";

type Props = {
  onPress?: () => void;
};

const BackButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={require("@src/assets/images/arrowLeft.webp")}
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: colors["lavender"],
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    width: 17,
    height: 14,
  },
});
