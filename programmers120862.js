function solution(numbers) {
    var answer = 0;
    let sort = numbers.sort(function(a,b){
        return a-b
    })
    let small = sort[0] * sort[1]
    let big = numbers[numbers.length-1] * numbers[numbers.length-2]
    
    if(big < small){
        answer = small
    }else {
        answer = big
    }
    return answer;
}
