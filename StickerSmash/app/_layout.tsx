/** defines shared UI elements such as headers and tab bar so they are consistent between different routes */
import { Stack } from "expo-router";
import { StatusBar} from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
    <Stack>
    /**Stack navigator for navigating between different screens in an app**/
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>   
    <StatusBar style="light"/>
    </>
    

  );
}
