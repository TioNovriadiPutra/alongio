import { Greeting } from "@src/pages/auth";
import { AuthStack } from "@src/utils/navigation";

const AuthRoute = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Greeting" component={Greeting} />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
