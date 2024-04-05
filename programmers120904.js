function solution(num, k) {
    var answer = [];
    let str = String(num)
    let num1 = String(k)
    for(let i = 0; i < str.length; i++){
        if(str[i] === num1){
            return i + 1
        }
    }
    
    return -1
    
    return answer;
}
