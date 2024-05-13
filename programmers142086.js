function solution(s) {
    var answer = [];
    let spl = s.split('')
    let word = new Map()
    for(let i = 0; i < s.length; i++){
        if(!word.has(s[i])){
            answer.push(-1)
            word.set(s[i],i)
        }else if(word.has(s[i])){
            answer.push(Math.abs(i)-Math.abs(word.get(s[i])))
            word.set(s[i],i)
        }
    }
    return answer;
    
}
