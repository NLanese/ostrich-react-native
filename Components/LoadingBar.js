import React from "react";
import Gradient from "./Gradient";


const LoadingBar = (
    colorOne = false,               // Needed
    colorTwo = false,               // Optional
    customFillDesign = false,       // Optional, big overrider

    barStyles = false,              // Assumed false
    
    timeDuration = false,           // Conditional One Only
    progress = false,               // Conditional One Only
    process = false,                // Conditional One Only
) => {


//------------------------------------------//
//                                          //   
//            GUARDS AND CATCHES            //
//                                          //
//-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v//

    if (!colorOne){
        throw new Error("Error: <LoadingBar> Components need at least a colorOne value entered.")
    }
    if (timeDuration){
        if (progress || process){
            throw new Error("Error: <LoadingBar> Components need a value for ONE of ")
        }
    }
}