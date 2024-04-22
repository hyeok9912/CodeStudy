function solution(dots) {
    var answer = 0;
    let diff = []
    
        function calculateslope(dots1,dots2){
            if(dots1[0] === dots2[0]) return Infinity;
            return (dots2[1] - dots1[1])  / (dots2[0] - dots1[0])  //// 선분의 기울기 계산식 dots[1]= 각각의 점들의 y값
                                                                    //// dots[0] = 각각의 점들의 x 값
        }
    
    for(let i = 0; i < dots.length; i++){
        for(let j = i+1; j < dots.length; j++){
            let slope = calculateslope(dots[i],dots[j])
            diff.push(slope)
        }
    }
    
    for(let i = 0; i < diff.length; i++){
        for(let j = i+1; j < diff.length; j++){
            if(diff[i] === diff[j]){
                    return 1
            }
        }
    }
    return 0
    
    
    return answer;
}


function solution(dots) {
    function checkParallel(dot1, dot2, dot3, dot4) {
        // 두 선분의 방향 벡터를 계산
        let vec1 = [dot2[0] - dot1[0], dot2[1] - dot1[1]];
        let vec2 = [dot4[0] - dot3[0], dot4[1] - dot3[1]];
        
        // 벡터의 비율을 비교하여 평행 여부 판단
        return vec1[0] * vec2[1] === vec1[1] * vec2[0];
    }
    
    // 모든 선분 조합에 대해 평행 여부 검사
    if (checkParallel(dots[0], dots[1], dots[2], dots[3]) || 
        checkParallel(dots[0], dots[2], dots[1], dots[3]) ||
        checkParallel(dots[0], dots[3], dots[1], dots[2])) {
        return 1;
    }
    
    return 0;
}
