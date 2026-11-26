import { ImageSource } from "expo-image";
import { AnimationObject } from "lottie-react-native";

export type OnboardingSlideType = {
  tag: string;
  title: string;
  description: string;
  vector: ImageSource;
  animation: AnimationObject | number;
};
