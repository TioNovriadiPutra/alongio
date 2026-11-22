import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Greeting: undefined;
};

export const AuthStack = createNativeStackNavigator<AuthStackParamList>();
