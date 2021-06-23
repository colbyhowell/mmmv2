export default function Mean(props) {
    let dataArr = props.weatherData.data
    const noDecimals = dataArr.map(function(val) {
        return Math.round(val)
    })
    let meanNum = noDecimals.reduce((a, cv) => a + cv, 0) / noDecimals.length
    
    return meanNum
}