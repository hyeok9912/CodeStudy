function solution(numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){           
        sum += numbers[i]                            // for 반복문을 통해 sum 변수에 numbers의 합을 구한갑을 대입
    }
    
    var answer = sum / numbers.length;              // numbers의 합인 sum 변수를 다시 numbers.length 값 만큼 나누면 평균값을 구할 수 있음
    return answer;
}
