function solution(common) {
    var answer = 0;
    if(common[1] - common[0] === common[2] - common[1]){
        let diff = common[1] - common[0]
        answer = common[common.length-1] + diff
    }else if(common[1] / common[0] === common[2] / common[1]){
        let ratio = common[1] / common[0]
        answer = common[common.length-1] * ratio
    }
        
    
    return answer;
}
