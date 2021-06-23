export default function Median(props){
    let midArr = props.weatherData.data
    console.log(midArr)
    let midNum = Math.floor(midArr.length / 2);
    midArr.sort((a, b) => a - b);
    let median = midArr.length % 2 !== 0 ? midArr[midNum] :
    (midArr[midNum - 1] + midArr[midNum]) / 2
    return Math.round(median * 100)/100
  };