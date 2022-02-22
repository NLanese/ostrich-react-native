import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TabBar from './Components/TabBar';

export default function App() {
  return (
    <View style={styles.container}>
      <TabBar 
        tabsArray={["option1", "option2", "option3", "option4"]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
