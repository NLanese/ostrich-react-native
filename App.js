import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TabBar from './Components/TabBar';
import Gradient from './Components/Gradient';


export default function App() {

  const [index, setIndex] = useState(0)

  const renderStuff = () => {
    console.log(index)
    if (index === 1){
      return(
       <Text> Henlo </Text>
      )
    }
  }


  return (
    <View style={styles.container}>

      <TabBar 
        tabsArray={["Gradient", "option2", "option3", "option4"]}
        onChange={(index) => {
          console.log(index)
          setIndex(index)
        }}
      />
      {renderStuff()}

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
