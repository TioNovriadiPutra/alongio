import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "@src/styles/colors";

type Props = {
  mode?: "primary" | "secondary" | "destructive";
  label: string;
  onPress?: () => void;
};

const Button = ({ mode = "primary", label, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            mode === "destructive"
              ? colors["pink"]
              : mode === "secondary"
                ? "transparent"
                : colors["ink"],
        },
        mode === "secondary" && styles.containerSecondary,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.label,
          { color: mode === "primary" ? colors["cream"] : colors["ink"] },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 28,
  },
  containerSecondary: {
    borderWidth: 1,
    borderColor: colors["ink"],
  },
  label: {
    fontFamily: "DMBold",
    fontSize: 15,
  },
});
