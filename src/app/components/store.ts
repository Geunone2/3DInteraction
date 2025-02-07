import {proxy} from "valtio";

const state = proxy({

    colors : [
        "#FF0000", // 빨간색
        "#00FF00", // 초록색
        "#0000FF", // 파란색
        "#FFFF00", // 노란색
        "#FF00FF", // 보라색
        "#00FFFF", // 하늘색
        "#FFFFFF", // 흰색
        "#000000", // 검은색
    ],
    selectedColor: '#FFFFFF',
})

export {state}


