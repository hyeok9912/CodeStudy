function solution(my_string) {
   
    let lower = my_string.toLowerCase()
    let arr = lower.split('')
    let sort = arr.sort()
     var answer = sort.join('');
    
    
    
    return answer;
}
