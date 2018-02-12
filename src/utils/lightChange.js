export default (lightArray, lightLamp) => {
    Object.keys(lightArray).map(d => lightArray[d] = false)
    lightArray[lightLamp] = true
    return lightArray
}