function solution(s) {
    var answer = 0;
    let word = []
    for(let i = 0; i < s.length; i++){
        word.push(s[i])
        
        const X = word.filter(item =>(item === word[0]))
        const notX = word.filter(item =>(item !== word[0]))
        
        if(X.length === notX.length){
            answer++
            word = []
        }
    }
    
    if(word.length !== 0){
        answer++
    }
    return answer;
}
