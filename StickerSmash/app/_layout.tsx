/** defines shared UI elements such as headers and tab bar so they are consistent between different routes */
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
    /**Stack navigator for navigating between different screens in an app**/
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
