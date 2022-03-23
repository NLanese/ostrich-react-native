import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import Gradient from './Gradient';

const DynamicInput = ({

   height = false,                      // Needs Value      
   width = false,                       // Needs Value

   placeholder = "",                    // Optional
   placeholderColor = "grey",           // Optional

   borderLeftRightWidth = 3,            // How much larger the gradient is than the input height-wise
   borderTopBottomWidth = 3,            // How much larger the gradient is than the input width-wise
   borderRadius = 0.0001,               // Determines the border radius of both the input as well as the border

   activeColorOne = false,              // Needs Value
   activeColorTwo = false,              // Second Color Optional

   activeTextStyle = null,              // Optional
   activeBackgroundColor = "white",     // Optional 

   inactiveColor = false,               // Needs Value. Color for inactive border

   inactiveTextStyle = null,            // Optional
   inactiveBackgroundColor = "white",   // Optional

   errorColorOne = "red",               // Optional
   errorColorTwo = false,               // Optional

   errorTextStyle = null,               // Optional
   errorBackgroundColor = "white",      // Optional

   onChange = null,                     // Optional. Meant to be a function that allows the user to handle the content of the input

   
   returnErrorIf = null,                // Optional. Function that when true, sets the field to an error
   clear = null                         // Optional. When true, clears the content
    
}) =>{

//------------------------------------------//
//                                          //   
//                  STATE                   //
//                                          //
//-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v//

    // Tracks if the input is active or not
    const [active, setActive] = useState(false)

    // Tracks the content of the input
    const [content, setContent] = useState("")

    // Tracks whether input is valid or not
    const [error, setError] = useState(false)

//------------------------------------------//
//                                          //   
//            GUARDS AND CATCHES            //
//                                          //
//-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v//

    // Guards for Null Values
    if (!height || !width || !activeColorOne || !inactiveColor){
        throw new Error("Error:\nAll <DynamicInput> Components need at least the following props provided... \n\t-height (number)\n\t-width (number)\n\t-colorOne (string in color format)\n\t-inactiveColor (string in color format)")
    }

    // Checks null active 2
    if (!activeColorTwo){
        activeColorTwo = activeColorOne
    }

    // Checks null error 2
    if (!errorColorTwo){
        errorColorTwo = errorColorOne
    }

//------------------------------------------//
//                                          //   
//              DETERMINATIONS              //
//                                          //
//-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v//

    // Determines if the input is either in an 
    //----> Error
    //----> Active
    //----> Inactive
    // BORDER COLOR
    function determineBorderColor(){
        if (active){
            return{ colorOne : activeColorOne, colorTwo: activeColorTwo}
        }
        if (error){
            return { colorOne: errorColorOne, colorTwo: errorColorTwo}
        }
        if (!active){
            return{ colorOne: inactiveColor, colorTwo: inactiveColor}
        }
    }

    // Determines if the input is either in an 
    //----> Error
    //----> Active
    //----> Inactive
    // TEXT STYLE
    function determineTextStyle(){
        if (active){
            return activeTextStyle
        }
        if (error){
            return errorTextStyle
        }
        if (!active){
            return inactiveTextStyle
        }
    }

    // Determines if the input is either in an 
    //----> Error
    //----> Active
    //----> Inactive
    // BACKGROUND
    function determineBackground(){
        if (active){
            return activeBackgroundColor
        }
        if (error){
            return errorBackgroundColor
        }
        if (!active){
            return inactiveBackgroundColor
        }
    }



    // Handles the onChange Function to be used by developers
    let onChangeContent
    if (!onChange){
        onChangeContent = (index) => {
            return null
        } 
    }
    else{
        onChangeContent = (index) => {
            onChange(index)
        }
    }



//------------------------------------------//
//                                          //   
//           MAIN RENDER METHOD             //
//                                          //
//-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v//
    return(
            <Gradient 
                colorOne={determineBorderColor().colorOne}
                colorTwo={determineBorderColor().colorTwo}
                style={{
                    height: height + borderTopBottomWidth,
                    width: width + borderLeftRightWidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: borderRadius * 1.1,                
                }}
            >
                <TextInput

                    placeholder={placeholder}
                    placeholderTextColor={placeholderColor}

                    value={content} 
                    style={{
                        height: height,
                        width: width,
                        backgroundColor: determineBackground(),
                        borderRadius: borderRadius,
                        ...determineTextStyle()
                    }}
                    onChangeText={(content) => {
                        setActive(true)
                        setContent(content)
                        onChangeContent(content)
                    }}
                    onEndEditing={() => {
                        setActive(false)
                        if (returnErrorIf != null){
                            if (typeof(returnErrorIf) === 'function'){
                                if (returnErrorIf(content)){
                                    setError(true)
                                }
                                else{
                                    setError(false)
                                }
                            }
                            else{
                                throw new Error("Error!\nIn <DynamicInput> Components, the 'returnErrorIf' prop needs to be a function that returns true if the input has failed given validations.")
                            }
                        }
                        else{
                            setError(false)
                        }
                        if (clear){
                            setContent("")
                        }
                    }}
                />
            </Gradient>
        
    )
}

export default DynamicInput