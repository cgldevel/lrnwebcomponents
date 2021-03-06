export const A11yBehaviors=function(SuperClass){return class extends SuperClass{/**
     * Get a a11y safe text color based on background color
     * @prop {string} bgColor hexadecimal value for the color
     * @return {string} hexadecimal value for the color
     */getTextContrastColor(bgColor){// verify the value is hex value
let color="";// strip hash from string
const colorBuffer=bgColor.replace("#",""),rgb=parseInt(colorBuffer,16),r=255&rgb>>16,g=255&rgb>>8,b=255&rgb>>0,luma=.2126*r+.7152*g+.0722*b;// convert rrggbb to decimal
// per ITU-R BT.709
// if the luma is to low switch to white text
if(141>luma){color="#ffffff"}else{color="#000000"}// Set color and background color vars
return color}/**
     * Validate and modify the text contrast to ensure the correct contrast
     */computeTextPropContrast(textprop,bgprop){// verify the value is hex value
if(this[bgprop].includes("#")){const color=this.getTextContrastColor(this[bgprop]);// Set color and background color vars
this.set(textprop,color)}}}};