import { useNavigation } from "@react-navigation/native";
import { OnboardingSlide } from "@src/components/custom";
import { OnboardingSlideType } from "@src/interfaces/componentInterface";
import { colors } from "@src/styles/colors";
import { AuthNavigationProp } from "@src/utils/navigation";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const PAGE_DATA: OnboardingSlideType[] = [
  {
    tag: "TINY PLANNER",
    title: `Little plans,\nbig days.`,
    description:
      "Make time for what matters. Keep your tasks, reminders, and daily plans together.",
    vector: require("@src/assets/images/onboarding1.webp"),
  },
  {
    tag: "HEART DIARY",
    title: `A little room\nfor feelings.`,
    description:
      "Save moods and memories in your private diary, with the option to share an entry.",
    vector: require("@src/assets/images/onboarding2.webp"),
  },
  {
    tag: "LITTLE KITCHEN",
    title: `Good food,\nsmall joys.`,
    description:
      "Find recipes for the ingredients you have and plan meals you’ll look forward to.",
    vector: require("@src/assets/images/onboarding3.webp"),
  },
];

const Onboarding = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);

  const nav = useNavigation<AuthNavigationProp>();

  const slideAnim = useSharedValue([1, 0, 0]);
  const slideContentAnim = useSharedValue([1, 0, 0]);

  const onBack = () => {
    setPrevSlide(activeSlide);
    if (activeSlide === 0) {
      nav.goBack();
    } else {
      setActiveSlide((prev) => prev - 1);
    }
  };

  const onNext = () => {
    setPrevSlide(activeSlide);
    if (activeSlide === PAGE_DATA.length - 1) {
      nav.navigate("Register");
    } else {
      setActiveSlide((prev) => prev + 1);
    }
  };

  useEffect(() => {
    slideAnim.value = withTiming(
      PAGE_DATA.map((_, index) => (index === activeSlide ? 1 : 0)),
      { duration: 500 },
    );

    slideContentAnim.value = withSequence(
      withTiming(
        PAGE_DATA.map((_, index) => {
          if (prevSlide < activeSlide) {
            return index === activeSlide - 1
              ? 2
              : index === activeSlide
                ? 1
                : 0;
          }

          return index === activeSlide + 1 ? 2 : index === activeSlide ? 1 : 0;
        }),
        { duration: 500 },
      ),
      withTiming(
        PAGE_DATA.map((_, index) => (index === activeSlide ? 1 : 0)),
        { duration: 0 },
      ),
    );
  }, [activeSlide]);

  return (
    <View style={styles.container}>
      <View style={styles.slideContainer}>
        {PAGE_DATA.map((item, index) => {
          return (
            <OnboardingSlide
              key={index.toString()}
              slideData={item}
              isLast={index === PAGE_DATA.length - 1}
              index={index}
              animValues={slideAnim}
              contentAnimValues={slideContentAnim}
              contentLength={PAGE_DATA.length}
              onBack={onBack}
              onNext={onNext}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["cream"],
    paddingHorizontal: 20,
    paddingTop: 47,
    paddingBottom: 37,
  },
  slideContainer: {
    flex: 1,
  },
});
