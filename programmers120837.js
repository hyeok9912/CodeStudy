function solution(hp) {  //// 장군 5 , 병정 3, 일 1
    var answer = 0;
    let j = Math.floor(hp/5)
    let b = Math.floor((hp - j*5)/3)
    let l = hp - (j*5) - (b*3)
    
    
    return (j+b+l);
}
