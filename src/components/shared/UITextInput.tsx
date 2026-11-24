import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ControllerRenderProps, FieldError } from "react-hook-form";
import { colors } from "@src/styles/colors";
import { useEffect, useState } from "react";
import { Eye, EyeSlash } from "iconsax-react-nativejs";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  field: ControllerRenderProps<any, any>;
  label: string;
  placeholder?: string;
  type?: KeyboardTypeOptions;
  mode?: "text" | "password";
  error?: FieldError;
};

const UITextInput = ({
  field,
  label,
  placeholder = "Input here...",
  type = "default",
  mode = "text",
  error,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const errorAnim = useSharedValue(0);

  const errorAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(errorAnim.value, [0, 1], [-20, 0]);

    return {
      transform: [{ translateX }],
      opacity: errorAnim.value,
    };
  });

  useEffect(() => {
    if (error) {
      errorAnim.value = withTiming(1, { duration: 500 });
    } else {
      errorAnim.value = withTiming(0, { duration: 500 });
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View
        style={[
          styles.inputBox,
          { borderColor: error ? colors["pink"] : colors["muted"] },
        ]}
      >
        <TextInput
          value={field.value}
          placeholder={placeholder}
          placeholderTextColor={colors["muted"]}
          onChangeText={field.onChange}
          keyboardType={type}
          secureTextEntry={mode === "password" ? !showPassword : false}
          style={styles.input}
        />

        {mode === "password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (
              <EyeSlash size={20} color={colors["muted"]} />
            ) : (
              <Eye size={20} color={colors["muted"]} />
            )}
          </TouchableOpacity>
        )}

        <Animated.Text style={[styles.error, errorAnimatedStyle]}>
          {error?.message ?? ""}
        </Animated.Text>
      </View>
    </View>
  );
};

export default UITextInput;

const styles = StyleSheet.create({
  container: {
    gap: 7,
  },
  label: {
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 12,
  },
  input: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: "DMRegular",
    fontSize: 16,
    color: colors["ink"],
  },
  error: {
    position: "absolute",
    bottom: "-50%",
    left: 16,
    fontFamily: "DMRegular",
    fontSize: 14,
    backgroundColor: colors["cream"],
    color: colors["pink"],
  },
});
