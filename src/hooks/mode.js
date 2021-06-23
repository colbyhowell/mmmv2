export default function Mode(props){
    let dataArr = props.weatherData.data
    console.log(dataArr)

    const mode = [...new Set(dataArr)]
    .map(num => [num, dataArr.filter((n) => n === num).length])
    .sort((a,b) => b[1] - a[1])
    .filter((dataFil, i, arr) => dataFil[1] === arr[0][1])
    .map(modes => [modes[0]])
    return mode.join(" , ")
}

