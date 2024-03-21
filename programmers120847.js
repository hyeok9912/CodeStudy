function solution(numbers) {
    var answer = 0;
    numbers.sort(function(a,b){
        return b-a  /// 내림 차순 정렬
        
    })
    
    answer += numbers[0]*numbers[1]

    return answer;
}
