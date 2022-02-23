import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TabBar from './Components/TabBar';
import Gradient from './Components/Gradient';


export default function App() {

  const [index, setIndex] = useState(0)

  const renderStuff = () => {
    console.log(index)
    if (index == 0){
      return(
        <Gradient
          colorOne="red"
          colorTwo="#DDDDDD"
          style={{
            width: 75,
            height: 75,
            borderRadius: 37
          }}
          hollow={true}
          hollowColor={"#f1f1f1"}
          hollowBorderSize="medium"
          hollowStyles={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>A!</Text>
        </Gradient>
      )
    }
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
        tabTextStyleActive={{color: 'blue', padding: 0, fontSize: 22, marginTop: -3}}
        styleActive={{borderBottomColor: 'blue', borderBottomWidth: 4}}
      />
      {renderStuff()}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    // flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
