function solution(numbers, k) {
    
    let c = 0 ///  현재 위치값 저장
    for(let i = 1; i < k; i++){
        c = (c+2)%numbers.length //// (currentPosition + 2) 이를 배열의 길이로 나눈 나머지를 취함으로써 (% numbers.length), 배열의 범위를 넘어가는 경우를 처리
    }
    var answer = numbers[c];
        
    return answer;
}
