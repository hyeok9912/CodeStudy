function solution(age) {
    var answer = '';
    let s = String(age).split('')
    
    for(let i = 0; i < s.length; i++){
        answer += String.fromCharCode(Number(s[i])+97)
    }
    
    return answer;
}
