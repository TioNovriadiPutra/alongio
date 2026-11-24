import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton, Button } from "../shared";
import { Image } from "expo-image";
import { colors } from "@src/styles/colors";
import { OnboardingSlideType } from "@src/interfaces/componentInterface";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigationProp } from "@src/utils/navigation";

const HEIGHT = Dimensions.get("window").height;

const AnimatedImage = Animated.createAnimatedComponent(Image);

type Props = {
  slideData: OnboardingSlideType;
  isLast: boolean;
  index: number;
  animValues: SharedValue<number[]>;
  contentAnimValues: SharedValue<number[]>;
  contentLength: number;
  onBack?: () => void;
  onNext?: () => void;
};

const OnboardingSlide = ({
  slideData,
  isLast,
  index,
  animValues,
  contentAnimValues,
  contentLength,
  onBack,
  onNext,
}: Props) => {
  const nav = useNavigation<AuthNavigationProp>();

  const vectorAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animValues.value[index],
    };
  });

  const tagAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      contentAnimValues.value[index],
      [0, 1, 2],
      [0, 0, 20],
    );
    const opacity = interpolate(
      contentAnimValues.value[index],
      [0, 1, 2],
      [0, 1, 0],
    );

    return {
      transform: [{ translateX: `${translateX}%` }],
      opacity,
    };
  });

  const descAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      contentAnimValues.value[index],
      [0, 1, 2],
      [0, 0, 20],
    );
    const opacity = interpolate(
      contentAnimValues.value[index],
      [0, 1, 2],
      [0, 1, 0],
    );
    const scale = interpolate(
      contentAnimValues.value[index],
      [0, 1, 2],
      [0.5, 1, 1],
    );

    return {
      transform: [{ translateY: `${translateY}%` }, { scale }],
      opacity,
    };
  });

  return (
    <View style={[styles.slide, { zIndex: index + 1 }]}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <BackButton onPress={onBack} />

          <Image
            source={require("@src/assets/images/logoFull.webp")}
            style={styles.logo}
          />
        </View>

        <TouchableOpacity onPress={() => nav.navigate("Register")}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      <AnimatedImage
        source={slideData.vector}
        style={[styles.vector, vectorAnimatedStyle]}
        contentFit="contain"
        contentPosition="center"
      />

      <Animated.View style={[styles.indicatorContainer, vectorAnimatedStyle]}>
        <View style={styles.indicatorLeft}>
          {Array.from({ length: contentLength }).map((_, i) => (
            <View key={i.toString()} style={styles.indicator}>
              {i === index && <View style={styles.indicatorColor} />}
            </View>
          ))}
        </View>

        <Text style={styles.indicatorRight}>
          {index + 1} of {contentLength}
        </Text>
      </Animated.View>

      <Animated.Text style={[styles.tag, tagAnimatedStyle]}>
        {slideData.tag}
      </Animated.Text>

      <Animated.View style={[styles.descContainer, descAnimatedStyle]}>
        <Text style={styles.title}>{slideData.title}</Text>

        <Text style={styles.desc}>{slideData.description}</Text>
      </Animated.View>

      <Animated.View style={vectorAnimatedStyle}>
        <Button
          label={!isLast ? "Continue" : "Create an account"}
          onPress={onNext}
        />
      </Animated.View>
    </View>
  );
};

export default OnboardingSlide;

const styles = StyleSheet.create({
  slide: {
    position: "absolute",
    left: 0,
    right: 0,
    height: HEIGHT - 84,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 110,
    height: 40,
  },
  skip: {
    fontFamily: "DMBold",
    fontSize: 14,
    color: colors["ink"],
  },
  vector: {
    flex: 1,
  },
  tag: {
    fontFamily: "DMBold",
    fontSize: 11,
    color: colors["ink"],
    paddingTop: 16,
  },
  descContainer: {
    paddingTop: 14,
    gap: 14,
  },
  title: {
    fontFamily: "SpaceBold",
    fontSize: 36,
    color: colors["ink"],
    lineHeight: 39,
    letterSpacing: -1.18,
  },
  desc: {
    fontFamily: "DMRegular",
    fontSize: 16,
    color: colors["muted"],
    lineHeight: 22,
    marginBottom: 93,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  indicatorLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  indicator: {
    width: 21,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors["indigo"],
    overflow: "hidden",
  },
  indicatorRight: {
    fontFamily: "DMMedium",
    fontSize: 13,
    color: colors["muted"],
  },
  indicatorColor: {
    flex: 1,
    backgroundColor: colors["ink"],
  },
});
