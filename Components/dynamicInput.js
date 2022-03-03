import React, { useState } from 'react';
import { TextInput } from 'react-native';

import Gradient from './Gradient';

const DynamicInput = (
    height = "auto",
    width = "auto",
    maxHeight = false,
    backgroundColor = "white",
    borderRadius = 0,
    colorOne = false,
    colorTwo = false,
    inactiveColor = "grey"
) =>{

//------------------------------------------//
//                                          //   
//                  STATE                   //
//                                          //
//-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v//

    // Tracks if the input is active or not
    const [active, setActive] = useState(false)

    // Tracks the content of the input
    const [content, setContent] = usestate("")

    // Tracks the height of the Gradient to match the input if it is multline

//------------------------------------------//
//                                          //   
//            GUARDS AND CATCHES            //
//                                          //
//-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v//

    // Handles Color Inputs
    if (!colorOne){
        throw new Error("Error: <DynamicInputr> Components need at least a colorOne value entered.")
    }
    if (!colorTwo){
        colorTwo = colorOne
    }


    // Handles Gradient Border Radius
    let gradientBorder
    if (borderRadius < 0){
        throw new Error("Error: You literally can't ever have a negative borderRadius value so I'm not sure why you tried it here")
    }
    if (borderRadius == 0){
        gradientBorder = 0
    }
    if (borderRadius > 0){
        gradientBorder = borderRadius / 2
    }

//------------------------------------------//
//                                          //   
//              DETERMINATIONS              //
//                                          //
//-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v//

    const determineColors = () => {
        if (active){
            return({
                colorOne: colorOne,
                colorTwo: colorTwo
            })
        }
    } 

    return(
        <Gradient
            colorOne={colorOne}
            colorTwo={colorTwo}
            style={{
                height: height * 1.05,
                widthL: width * 1.05,
                borderRadius: gradientBorder,
            }}
        >

        </Gradient>
    )
}