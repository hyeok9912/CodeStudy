function solution(dots) {
    let x = dots.map(function(dot){
        return dot[0]
    })
    let y = dots.map(function(dot){
        return dot[1]
    });
    
    let xMax = Math.max(...x)
    let xMin = Math.min(...x)
    let yMax = Math.max(...y)
    let yMin = Math.min(...y)
    
    let xSize = xMax - xMin
    let ySize = yMax - yMin
    
   var answer = xSize * ySize
    
    return answer;
} //// 아직 맵을 사용하는데에 미숙하다
