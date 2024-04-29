function solution(num, total) {
    var answer = [];
    let middleNum = total/num 
    let startNum = (total - (num*(num-1)/2))/num
    
    for(let i = 0; i < num; i++){
        answer.push(startNum + i)
    }
    return answer;
}

//// 평균값을 이용해 시작숫자를 구하는법
/// total 값 - (1부터 num-1까지 더한값) 나누기 / num
///            (num*(num-1))/2 === 1부터 num-1 까지 더한값
