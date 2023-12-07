import type { JSX } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View, useColorScheme } from "react-native";
import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={isDarkMode ? "#000" : "#fff"}
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Text>Edit to change this screen and then come back to see your edits.</Text>
          <Text>
            <ReloadInstructions />
          </Text>
          <Text>
            <DebugInstructions />
          </Text>
          <Text>Read the docs to discover what to do next:</Text>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
