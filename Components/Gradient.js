import React from "react";


const Gradient = ({
    threeColors = false,
    colorOne = false,
    colorTwo = false,
    colorThree = false,
    circular = false,
    hollow = false,
    hollowBorderSize = "medium"
}) => {

// --------------------------------------------------- //
//                                                     //
//                 DEFAULT SETTINGS                    //
//                                                     //
//v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v-v// 

if (!colorOne || !colorTwo){
    throw new Error("Error: <Gradient> Components need to have color values for both colorOne and colorTwo props!")
}
if (hollow){
    if (hollowBorderSize != "small" && hollowBorderSize != "medium" && hollowBorderSize != "large" && hollowBorderSize != "xLarge"){
        throw new Error("Error: <Gradient> Components, when hollow is true, need to have a hollowBorderSize of either 'small', 'medium', 'large', or 'xLarge'. No value defaults to 'medium'")
    }
}

}
export default Gradient