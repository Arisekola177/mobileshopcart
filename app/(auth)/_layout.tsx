import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome"/>
      <Stack.Screen name="signUp" />
      <Stack.Screen name="signIn"  />
      <Stack.Screen name="forgotPassword"  />
    </Stack>
  );
};

export default Layout;




