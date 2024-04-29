function solution(i, j, k) {
    var answer = 0;
    for(let num = i; num <= j; num++){
        const strNum = num.toString()
        for(let char of strNum){
            if(parseInt(char) === k){
                answer++
            }
        }
    }
    
    
    return answer;
}
