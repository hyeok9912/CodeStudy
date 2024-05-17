function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a)
    let maxbox = parseInt(score.length / m)
    for(let i = 0; i < maxbox; i++){
        const box = score.slice(i*m, (i+1)*m)
        const min = Math.min(...box)
        answer += min*m
    }
    
    
    return answer;
}
