import { RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Greeting: undefined;
  Onboarding: undefined;
  Register: undefined;
  VerifyEmail: {
    email: string;
  };
  ProfileSetup: {
    id: string;
  };
  SpaceSetup: {
    id: string;
  };
};

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export type VerifyEmailRouteProp = RouteProp<AuthStackParamList, "VerifyEmail">;
export type ProfileSetupRouteProp = RouteProp<
  AuthStackParamList,
  "ProfileSetup"
>;
