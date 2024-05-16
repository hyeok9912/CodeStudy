function solution(k, score) {
    var answer = [];
    let result = [] /// 명예의 전당
    for(let i = 0; i < score.length; i++){
        if(i < k){
            result.push(score[i]);
            result.sort((a,b)=>b-a);
        } else if(Math.min(...result) < score[i]){
            result.push(score[i]);
            result.sort((a,b)=>b-a);
            result.pop();
        }
        answer.push(result[result.length-1]);
    }
    return answer;
}
