import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import Profile from "../screens/Profile";
import OnboardingScreen from "../screens/onboarding";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      <Stack.Screen name="profile" component={Profile} />

    </Stack.Navigator>
  );
};

export default RootNavigator;
