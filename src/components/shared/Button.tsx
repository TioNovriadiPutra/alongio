import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "@src/styles/colors";

type Props = {
  mode?: "primary" | "secondary" | "destructive";
  label: string;
  disabled?: boolean;
  onPress?: () => void;
};

const Button = ({ mode = "primary", label, disabled, onPress }: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: disabled
            ? colors["lavender"]
            : mode === "destructive"
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
          {
            color: disabled
              ? colors["muted"]
              : mode === "primary"
                ? colors["cream"]
                : colors["ink"],
          },
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
