import {
  ChangePassword,
  CheckInbox,
  EmailVerified,
  ForgotPassword,
  Greeting,
  Login,
  Onboarding,
  ProfileSetup,
  Register,
  SpaceSetup,
  VerifyEmail,
} from "@src/pages/auth";
import { AuthStack } from "@src/utils/navigation";

const AuthRoute = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Greeting" component={Greeting} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="VerifyEmail" component={VerifyEmail} />
      <AuthStack.Screen name="ProfileSetup" component={ProfileSetup} />
      <AuthStack.Screen name="SpaceSetup" component={SpaceSetup} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="EmailVerified" component={EmailVerified} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="CheckInbox" component={CheckInbox} />
      <AuthStack.Screen name="ChangePassword" component={ChangePassword} />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
