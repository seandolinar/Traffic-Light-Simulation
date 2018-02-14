export function linearLightChange (lightArray, lightLamp) {
    Object.keys(lightArray).map(d => lightArray[d] = false)
    lightArray[lightLamp] = true
    return lightArray
}

export function specificLightChange (lightArray, lightLamp, offLamp) {
    if (lightArray[offLamp]) {
        Object.keys(lightArray).map(d => lightArray[d] = false)
        lightArray[lightLamp] = true
    }
    return lightArray
}