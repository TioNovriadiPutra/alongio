import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ControllerRenderProps } from "react-hook-form";
import { colors } from "@src/styles/colors";
import { Camera } from "iconsax-react-nativejs";

type Props = {
  field: ControllerRenderProps<any, any>;
};

const UIProfileImageInput = ({ field }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Camera size={20} color={colors["ink"]} />
      </View>

      <TouchableOpacity>
        <Text style={styles.buttonLabel}>Add a photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UIProfileImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
  imageContainer: {
    width: 92,
    height: 92,
    borderRadius: "50%",
    backgroundColor: colors["lavender"],
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
  },
});
