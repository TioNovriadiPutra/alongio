import { colors } from "@src/styles/colors";
import { useEffect, useRef } from "react";
import { ControllerRenderProps, FieldError } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputInstance,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  field: ControllerRenderProps<any, any>;
  label: string;
  error?: FieldError;
  onResend?: () => void;
};

const UIOTPInput = ({ field, label, error, onResend }: Props) => {
  const textInputRefs = useRef<Array<TextInputInstance | null>>([]);

  const errorAnim = useSharedValue(0);

  const errorAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(errorAnim.value, [0, 1], [-20, 0]);

    return {
      transform: [{ translateY }],
      opacity: errorAnim.value,
    };
  });

  const onChangeText = (index: number, text: string) => {
    let digit = text.replace(/\D/g, "");

    if (digit.length > 1) {
      digit = digit[digit.length - 1];
    }

    const newValue = field.value.map((slot: string, i: number) =>
      i === index ? digit : slot,
    );

    field.onChange(newValue);

    if (digit.length > 0 && index < 5) {
      textInputRefs.current[index + 1]?.focus();
    }
  };

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

      <View style={styles.otpContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <View
            key={index.toString()}
            style={[
              styles.inputBox,
              { borderColor: error ? colors["pink"] : colors["muted"] },
            ]}
          >
            <TextInput
              ref={(input) => {
                textInputRefs.current[index] = input;
              }}
              value={field.value[index]}
              onChangeText={(text) => {
                onChangeText(index, text);
              }}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace") {
                  if (index > 0 && !field.value[index]) {
                    textInputRefs.current[index - 1]?.focus();
                  }
                }
              }}
              inputMode="numeric"
              keyboardType="number-pad"
              style={styles.input}
            />
          </View>
        ))}

        <Animated.Text style={[styles.error, errorAnimatedStyle]}>
          {error?.message ?? ""}
        </Animated.Text>
      </View>

      <TouchableOpacity onPress={onResend}>
        <Text style={styles.resend}>Resend code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UIOTPInput;

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  label: {
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  inputBox: {
    width: 49.67,
    height: 60,
    borderWidth: 1,
    borderRadius: 14,
    justifyContent: "center",
  },
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: "DMRegular",
    fontSize: 16,
    color: colors["ink"],
    textAlign: "center",
  },
  resend: {
    alignSelf: "center",
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
    paddingVertical: 15,
    marginTop: 14,
  },
  error: {
    position: "absolute",
    bottom: "-40%",
    left: 0,
    right: 0,
    textAlign: "center",
    fontFamily: "DMRegular",
    fontSize: 14,
    backgroundColor: colors["cream"],
    color: colors["pink"],
  },
});
