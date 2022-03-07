import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TabBar from './Components/TabBar';
import Gradient from './Components/Gradient';
import DynamicInput from './Components/DynamicInput';

export default function App() {

  const [index, setIndex] = useState(0)

  const renderStuff = () => {
    console.log(index)
    if (index == 0){
      return(
        <View>
            <Gradient
            colorOne="red"
            colorTwo="blue"
            style={{
              width: 100,
              height: 100,
              borderRadius: 50
            }}
            hollow={true}
            hollowColor={"#f1f1f1"}
            hollowBorderSize="large"
            hollowStyles={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>Example of Hollow Gradient!</Text>
          </Gradient>

            <View style={{marginTop: 15}} />

          <Gradient
          colorOne="black"
          colorTwo="green"
          style={{
            width: 100,
            height: 100,
            borderRadius: 0
          }}
          hollow={true}
          hollowColor={"#f1f1f1"}
          hollowBorderSize="large"
          hollowStyles={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>Example of Hollow Gradient!</Text>
        </Gradient>

        <View style={{marginTop: 15}} />


        <Gradient
          colorOne="yellow"
          colorTwo="pink"
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{textAlign: 'center', padding: 2}}>Example of Filled Gradient!</Text>
        </Gradient>

        <View style={{marginTop: 15}} />


        <Gradient
          colorOne="cyan"
          colorTwo="lime"
          style={{
            width: 100,
            height: 100,
            borderRadius: 0,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{textAlign: 'center', padding: 2}}>Example of Filled Gradient!</Text>
        </Gradient>
        </View>
      )
    }
    if (index === 1){
      return(
        <View>
          <DynamicInput 

            height={50}
            width={300}

            placeholder="Example Field One"

            borderLeftRightWidth={10}
            borderTopBottomWidth={10}
            borderRadius={30}

            activeColorOne="blue"
            activeColorTwo="cyan"

            inactiveColor="grey"

            activeTextStyle={{
              paddingLeft: 20,
              fontWeight: '600',
              color: 'blue'
            }}

            inactiveTextStyle={{
              paddingLeft: 20,
              fontWeight: '200',
              color: 'red'
            }}

            inactiveBackgroundColor= "grey"

            placeholderColor='white'
            
          />

          <View style={{marginTop: 40}} />

          <DynamicInput 

            height={50}
            width={300}

            borderLeftRightWidth={10}
            borderTopBottomWidth={10}
            borderRadius={30}

            activeColorOne="red"
            activeColorTwo="cyan"

            inactiveColor="grey"
            
          />

          <View style={{marginTop: 40}} />

          <DynamicInput 

            height={50}
            width={300}

            borderLeftRightWidth={10}
            borderTopBottomWidth={10}
            borderRadius={30}

            activeColorOne="red"
            activeColorTwo="cyan"

            inactiveColor="grey"
            
          />
        </View>
      )
    }
  }


  return (
    <View style={styles.container}>

      <TabBar 
        tabsArray={["Gradient", "Dynamic Inputs", "option3", "option4"]}
        onChange={(index) => {
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
  container:{
    marginTop: 100,
    // flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
