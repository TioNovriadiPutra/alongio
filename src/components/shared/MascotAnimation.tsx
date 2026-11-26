import { memo, useCallback, useEffect, useRef } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import LottieView, { AnimationObject } from "lottie-react-native";
import { Image, ImageSource } from "expo-image";
import { useReducedMotion } from "react-native-reanimated";

type MascotAnimationProps = {
  source: AnimationObject | number;
  fallbackImage?: ImageSource;
  aspectRatio: number;
  isActive?: boolean;
  tapToReplay?: boolean;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
};

const MascotAnimation = ({
  source,
  fallbackImage,
  aspectRatio,
  isActive = true,
  tapToReplay = true,
  borderRadius = 24,
  style,
}: MascotAnimationProps) => {
  const lottieRef = useRef<LottieView>(null);
  const hasMountedRef = useRef(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    if (reducedMotion || !isActive) return;

    lottieRef.current?.reset();
    const id = requestAnimationFrame(() => {
      lottieRef.current?.play();
    });
    return () => cancelAnimationFrame(id);
  }, [isActive, reducedMotion]);

  const handleReplay = useCallback(() => {
    if (reducedMotion || !tapToReplay) return;
    lottieRef.current?.reset();
    requestAnimationFrame(() => {
      lottieRef.current?.play();
    });
  }, [reducedMotion, tapToReplay]);

  if (reducedMotion && fallbackImage) {
    return (
      <View
        style={[styles.wrapper, { aspectRatio, borderRadius }, style]}
        accessible={false}
        importantForAccessibility="no-hide-descendants"
      >
        <Image source={fallbackImage} style={styles.fill} contentFit="cover" />
      </View>
    );
  }

  return (
    <Pressable
      onPress={handleReplay}
      disabled={!tapToReplay || reducedMotion}
      style={[styles.wrapper, { aspectRatio, borderRadius }, style]}
      accessible={false}
      importantForAccessibility="no-hide-descendants"
    >
      <LottieView
        ref={lottieRef}
        source={source}
        autoPlay={!reducedMotion && isActive}
        loop={false}
        {...(reducedMotion ? { progress: 1 } : {})}
        resizeMode="contain"
        renderMode="AUTOMATIC"
        onAnimationFailure={(err) => console.warn("Lottie load error:", err)}
        style={styles.fill}
      />
    </Pressable>
  );
};
export default memo(MascotAnimation);
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    overflow: "hidden",
  },
  fill: {
    width: "100%",
    height: "100%",
  },
});
