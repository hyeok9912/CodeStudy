function solution(numbers) {
    var answer = []; // 빈 배열 생성
    
    for(let i = 0; i < numbers.length; i++){ 
        answer.push(numbers[i] * 2);
    }
    
    return answer;
}
