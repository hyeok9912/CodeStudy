function solution(name, yearning, photo) {
    var answer = [];
    const score = new Map()
    for(let i = 0; i < name.length && i < yearning.length; i++){
        score.set(name[i],yearning[i])
    }
    
    for(let i = 0; i < photo.length; i++){
        let sum = 0
        for(let j = 0; j < photo[i].length; j++){
            if(score.has(photo[i][j])){
                sum += score.get(photo[i][j])
            }
        }
        answer.push(sum)
    }
    return answer;
}
