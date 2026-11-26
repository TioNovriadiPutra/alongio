import { Easing, WithSpringConfig } from "react-native-reanimated";
export const motion = {
  duration: {
    press: 90,
    release: 140,
    stateChange: 180,
    navigation: 220,
    sheetEnter: 240,
    sheetExit: 180,
    celebration: 480,
  },
  easing: {
    enter: Easing.bezier(0.2, 0.8, 0.2, 1),
    exit: Easing.bezier(0.4, 0, 1, 1),
  },
  spring: {
    mascot: {
      mass: 1,
      stiffness: 260,
      damping: 30,
    } satisfies WithSpringConfig,
  },
} as const;
