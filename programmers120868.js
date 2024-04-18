function solution(sides) {
    var answer = 0;
    /// sides 변수의 Math.max 수가 삼각형의 변 중에 가장 클 경우
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    
    let possibleMin = max - min +1

    
    // 나머지 한변이 삼각형중에 가장 큰 변일 경우
    
    let possibleMax = max + min -1
    
    
    answer = possibleMax - possibleMin +1
    
    return answer;
}


/// 2가지를 생각해야함 나머지 한변이 제일 큰 경우
/// sides 매개변수에서 가장 큰 수가 제일 큰 수 일 경우
