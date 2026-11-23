import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Greeting: undefined;
  Register: undefined;
  Onboarding: undefined;
};

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
