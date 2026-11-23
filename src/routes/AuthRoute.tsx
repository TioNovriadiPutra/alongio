import { Greeting, Onboarding, Register } from "@src/pages/auth";
import { AuthStack } from "@src/utils/navigation";

const AuthRoute = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Greeting" component={Greeting} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
