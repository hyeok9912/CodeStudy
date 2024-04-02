function solution(my_string, num1, num2) {
    var answer = '';
    let split = my_string.split('')
    let temp = split[num1]
    split[num1] = split[num2]
    split[num2] = temp
    
    
    answer = split.join('')
    
    return answer;
}
