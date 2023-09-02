/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import { JSX } from "react";
import { SafeAreaView, ScrollView, StatusBar, View, useColorScheme } from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import Typography from "@components/Typography";

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Typography title="Step One">
            Edit to change this screen and then come back to see your edits.
          </Typography>
          <Typography title="See Your Changes">
            <ReloadInstructions />
          </Typography>
          <Typography title="Debug">
            <DebugInstructions />
          </Typography>
          <Typography title="Learn More">Read the docs to discover what to do next:</Typography>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
